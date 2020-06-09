<?php
/**
 * Sends DomoffonApp\Service\FormDataStorage to email
 */

namespace DomoffonApp\Service;

use PHPMailer\PHPMailer\PHPMailer;
use Psr\Container\ContainerInterface;
use DomoffonApp\Service\FormDataStorage;

class MailSender
{
    /** @var PHPMailer\PHPMailer\PHPMailer */
    protected $mail;

    public function __construct()
    {
        $this->mail = new PHPMailer(true);
    }

    /**
     * Set PHPMailer configuration from DI-container
     */
    public function setConfig(ContainerInterface $container)
    {
        $config = $container->get('config')['email'];
  
        $this->mail->isSMTP();
        $this->mail->Host = $config['host'];
        $this->mail->SMTPAuth = true;
        $this->mail->CharSet = 'UTF-8';
        $this->mail->Username = $config['username'];
        $this->mail->Password = $config['password'];
        $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; 
        $this->mail->Port = $config['port'];
        $this->mail->isHTML(true);  
        
        $this->mail->setFrom($config['send_from'], 'Domoffon Form');
        $this->mail->addAddress($config['send_to']);
    }

    /**
     * Set mail content from FormDataStorage Object
     */
    public function setContent(FormDataStorage $form)
    {
        $this->mail->Subject = 'Новая заявка с сайта';

        $mailBody = "С вашего сайта поступила новая заявка на изготовление дубликата ключа. Данные из анкеты: \n"
                    . "1. Город: " . $form->city . "\n"
                    . "2. Улица: " . $form->street . "\n"
                    . "3. Дом: " . $form->house . "\n"
                    . "4. Номер квартиры: " . $form->flat . "\n"
                    . "5. Стоимость доставки: " . $form->deliveryPrice . " руб." . "\n" 
                    . "6. Телефон " . $form->phone . "\n"
                    . "7. Количество ключей: " . $form->numberOfKeys . "\n"
                    . "8. UID ключа: " . $form->uid . "\n" 
                    . "Фотографии ключей прикреплены во вложении к письму.";

        // Fill text of email
        $this->mail->Body = nl2br($mailBody);
        $this->mail->AltBody = $mailBody;

        // Add attachments
        foreach($form->images as $image) {
            $this->mail->addAttachment($image->getStream()->getMetadata('uri'), $image->getClientFilename());
        }
    }

    /**
     * Send an email
     */
    public function send()
    {
        $this->mail->send();
    }
}

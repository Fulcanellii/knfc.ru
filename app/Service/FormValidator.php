<?php
/**
 * Проверяет валидность объекта DomoffonApp\Service\FormDataStorage
 */
namespace DomoffonApp\Service;

use Slim\Psr7\UploadedFile;

class FormValidator
{
    /**
     * Conatins error messages if occured
     * @var Array
     */
    public $errors = [];

    private function validateCity(String $city)
    {
        if(mb_strlen($city) >= 90) {
            $this->errors[] = "Слишком длинное название города. Должно быть не более 90 символов.";
        }
        if(mb_strlen($city) < 1) {
            $this->errors[] = "Слишком короткое название города. Должен быть как минимум 1 символ.";
        }
    }

   private function validateStreet(String $street)
   {
        if(mb_strlen($street) >= 90) {
            $this->errors[] = "Слишком длинное название улицы. Должно быть не более 90 символов.";
        }
        if(mb_strlen($street) < 1) {
            $this->errors[] = "Слишком короткое название улицы. Должен быть как минимум 1 символ.";
        }
   }

   private function validateHouse(String $house)
   {
        if(mb_strlen($house) >= 50) {
            $this->errors[] = "Слишком длинный номер дома. Должно быть не более 50 символов.";
        }
        if(mb_strlen($house) < 1) {
            $this->errors[] = "Слишком короткий номер дома. Должен быть как минимум 1 символ.";
        } 
   }

   private function validateFlat(String $flat)
   {
        if(mb_strlen($flat) >= 10) {
            $this->errors[] = "Слишком длинный номер квартиры. Должно быть не более 10 символов.";
        }
        if(mb_strlen($flat) < 1) {
            $this->errors[] = "Слишком короткий номер квартиры. Должен быть как минимум 1 символ.";
        }   
   }

   private function validateIndex(String $index)
   {
        if(mb_strlen($index) != 6) {
            $this->errors[] = "Индекс может содержать только 6 цифр.";
        } 
   }

   private function validatePhone(String $phone)
   {
        if(mb_strlen($phone) >= 20) {
            $this->errors[] = "Слишком длинный номер телефона. Должно быть не более 20 символов.";
        }
        if(mb_strlen($phone) < 1) {
            $this->errors[] = "Слишком короткий номер телефона. Должен быть как минимум 1 символ.";
        }   
   }

   private function validateNumberOfKeys(String $number)
   {
        if(intval($number) >= 1000) {
            $this->errors[] = "Слишком много ключей для заказа. Должно быть не более 1000 штук.";
        }
        if(intval($number) < 1) {
            $this->errors[] = "Можно заказать минимум 1 ключ.";
        }   
   }

   private function validateUid(String $uid)
   {
        if(mb_strlen($uid) >= 90) {
            $this->errors[] = "Слишком длинный UID. Должно быть не более 90 символов.";
        }
   }

   private function validatePhoto(?UploadedFile $file)
   {
       if($file == null) {
           $this->errors[] = 'Недостаточно фотографий. Нужно загрузить 3 штуки.';
       } elseif ($file->getSize() == 0) {
           $this->errors[] = 'Ошибка в загруке фото. Попробуйте еще раз.';
       }
   }

   /**
    * @return Boolean
    */
   public function isFormValid(FormDataStorage $formData) {
       $this->validateCity($formData->city);
       $this->validateStreet($formData->street);
       $this->validateHouse($formData->house);
       $this->validateFlat($formData->flat);
       $this->validateIndex($formData->index);
       $this->validatePhone($formData->phone);
       $this->validateNumberOfKeys($formData->numberOfKeys);
       $this->validateUid($formData->uid);

       foreach($formData->images as $image) {
           $this->validatePhoto($image);
       }

       return empty($this->errors);
   }
}

<?php
/**
 * Class is an entity of upload form
 * It contains valid data from form
 */
namespace DomoffonApp\Service;

use Psr\Http\Message\ServerRequestInterface as Request;

class FormDataStorage
{
    /** @var String */
    public $city;

    /** @var String */
    public $street;
    
    /** @var String */
    public $house;
    
    /** @var String */
    public $flat;
    
    /** @var String */
    public $index;
    
    /** @var String */
    public $deliveryPrice;
    
    /** @var String */
    public $numberOfKeys;
    
    /** @var String */
    public $uid;
    
    /** @var String */
    public $phone;
    
    /** @var Array */
    public $images;

    /**
     * Fills class attributes from request object
     */
    public function fillFromRequest(Request $request)
    {
        $requestBody = $request->getParsedBody();

        $this->city = htmlspecialchars(trim(strval($requestBody['city'] ?? '')));
        $this->street = htmlspecialchars(trim(strval($requestBody['street'] ?? '')));
        $this->house = htmlspecialchars(trim(strval($requestBody['house'] ?? '')));
        $this->flat = htmlspecialchars(trim(strval($requestBody['flat'] ?? '')));
        $this->index = htmlspecialchars(trim(strval($requestBody['index'] ?? '')));
        $this->deliveryPrice = htmlspecialchars(trim(strval($requestBody['delivery_price'] ?? '')));
        $this->numberOfKeys = htmlspecialchars(trim(strval($requestBody['number_of_keys'] ?? '')));
        $this->uid = htmlspecialchars(trim(strval($requestBody['uid'] ?? '')));
        $this->phone = htmlspecialchars(trim(strval($requestBody['phone_number'] ?? '')));

        $uploadedFiles = $request->getUploadedFiles();

        foreach ($uploadedFiles as $val) {
            if ($val->getClientFilename() == null) {
                
            }else{
                $this->images[] = $val;
            }
            
        }
    }
}

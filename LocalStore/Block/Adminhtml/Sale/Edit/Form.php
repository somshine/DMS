<?php
class Som_LocalStore_Block_Adminhtml_Sale_Edit_Form
    extends Mage_Adminhtml_Block_Widget_Form
{
    protected function _prepareForm()
    {
        // instantiate a new form to display our brand for editing
        $form = new Varien_Data_Form(array(
            'id' => 'edit_form',
            'action' => $this->getUrl(
                'som_localstore_admin/sale/edit', 
                array(
                    '_current' => true,
                    'continue' => 0,
                )
            ),
            'method' => 'post',
        ));
        $form->setUseContainer(true);
        $this->setForm($form);
        
        // define a new fieldset, we only need one for our simple entity
        $fieldset = $form->addFieldset(
            'general',
            array(
                'legend' => $this->__('Sale Details')
            )
        );
        
        $saleSingleton = Mage::getSingleton(
            'som_localstore/sale'
        );
        
        // add the fields we want to be editable
        $this->_addFieldsToFieldset($fieldset, array(
            'name' => array(
                'label' => $this->__('Name'),
                'input' => 'text',
                'required' => true,
            ),
            'url_key' => array(
                'label' => $this->__('URL Key'),
                'input' => 'text',
                'required' => true,
            ),
            'description' => array(
                'label' => $this->__('Description'),
                'input' => 'textarea',
                'required' => true,
            ),
            'visibility' => array(
                'label' => $this->__('Visibility'),
                'input' => 'select',
                'required' => true,
                'options' => $saleSingleton->getAvailableVisibilies(),
            ),
            
            /**
             * Note: we have not included created_at or updated_at,
             * we will handle those fields ourself in the Model before save.
             */
        ));

        return $this;
    }
    
    /**
     * This method makes life a little easier for us by pre-populating 
     * fields with $_POST data where applicable and wraps our post data in 
     * 'saleData' so we can easily separate all relevant information in
     * the controller. You can of course omit this method entirely and call
     * the $fieldset->addField() method directly.
     */
    protected function _addFieldsToFieldset(
        Varien_Data_Form_Element_Fieldset $fieldset, $fields)
    {
        $requestData = new Varien_Object($this->getRequest()
            ->getPost('saleData'));
        
        foreach ($fields as $name => $_data) {
            if ($requestValue = $requestData->getData($name)) {
                $_data['value'] = $requestValue;
            }
            
            // wrap all fields with saleData group
            $_data['name'] = "saleData[$name]";
            
            // generally label and title always the same
            $_data['title'] = $_data['label'];
            
            // if no new value exists, use existing brand data
            if (!array_key_exists('value', $_data)) {
                $_data['value'] = $this->_getSale()->getData($name);
            }
            
            // finally call vanilla functionality to add field
            $fieldset->addField($name, $_data['input'], $_data);
        }
        
        return $this;
    }
    
    /**
     * Retrieve the existing brand for pre-populating the form fields.
     * For a new brand entry this will return an empty Brand object.
     */
    protected function _getSale() 
    {
        if (!$this->hasData('sale')) {
            // this will have been set in the controller
            $sale = Mage::registry('current_sale');
            
            // just in case the controller does not register the brand
            if (!$sale instanceof 
                    Som_LocalStore_Model_Sale) {
                $sale = Mage::getModel(
                    'som_localstore/sale'
                );
            }
            
            $this->setData('sale', $sale);
        }
        
        return $this->getData('sale');
    }
}
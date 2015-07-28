<?php
class Som_LocalStore_Block_Adminhtml_Sale_Edit
    extends Mage_Adminhtml_Block_Widget_Form_Container
{
    protected function _construct()
    {
        $this->_blockGroup = 'som_localstore_adminhtml';
        $this->_controller = 'sale';
        
        /**
         * The $_mode property tells Magento which folder to use to
         * locate the related form blocks to be displayed within this
         * form container. In our example this corresponds to 
         * LocalStore/Block/Adminhtml/Sale/Edit/.
         */
        $this->_mode = 'edit';
        
        $newOrEdit = $this->getRequest()->getParam('id')
            ? $this->__('Edit') 
            : $this->__('New');
        $this->_headerText =  $newOrEdit . ' ' . $this->__('Sale');
    }
}
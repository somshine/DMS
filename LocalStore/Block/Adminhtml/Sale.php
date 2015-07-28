<?php
class Som_LocalStore_Block_Adminhtml_Sale
    extends Mage_Adminhtml_Block_Widget_Grid_Container
{
    protected function _construct()
    {
        parent::_construct();
        
        /**
         * The $_blockGroup property tells Magento which alias to use to
         * locate the blocks to be displayed within this grid container.
         * In our example this corresponds to LocalStore/Block/Adminhtml.
         */
        $this->_blockGroup = 'som_localstore_adminhtml';
        
        /**
         * $_controller is a bit of a confusing name for this property. This 
         * value in fact refers to the folder containing our Grid.php and 
         * Edit.php. In our example, LocalStore/Block/Adminhtml/Sale, 
         * so we use 'sale'.
         */
        $this->_controller = 'sale';
        
        /**
         * The title of the page in the admin panel.
         */
        $this->_headerText = Mage::helper('som_localstore')
            ->__('Sale Directory');
    }
    
    public function getCreateUrl()
    {
        /**
         * When the Add button is clicked, this is where the user should
         * be redirected to. In our example, the method editAction of 
         * BrandController.php in LocalStore module.
         */
        return $this->getUrl(
            'som_localstore_admin/sale/edit'
        );
    }
}
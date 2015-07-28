<?php
class Som_LocalStore_Adminhtml_SaleController
    extends Mage_Adminhtml_Controller_Action
{
    /**
     * Instantiate our grid container block and add to the page content.
     * When accessing this admin index page we will see a grid of all
     * sales currently available in our Magento instance, along with
     * a button to add a new one if we wish.
     */
    public function indexAction()
    {
        // instantiate the grid container
        $saleBlock = $this->getLayout()
            ->createBlock('som_localstore_adminhtml/sale');
        
        // add the grid container as the only item on this page
        $this->loadLayout()
            ->_addContent($saleBlock)
            ->renderLayout();
    }
    
    /**
     * This action handles both viewing and editing of existing sales.
     */
    public function editAction()
    {
      
        /**
         * retrieving existing sale data if an ID was specified,
         * if not we will have an empty Brand entity ready to be populated.
         */
        $sale = Mage::getModel('som_localstore/sale');
        if ($saleId = $this->getRequest()->getParam('id', false)) {
            $sale->load($saleId);

            if ($sale->getId() < 1) {
                $this->_getSession()->addError(
                    $this->__('This sale no longer exists.')
                );
                return $this->_redirect(
                    'som_localstore_admin/sale/index'
                );
            }
        }
        
        // process $_POST data if the form was submitted
        if ($postData = $this->getRequest()->getPost('saleData')) {
            try {
                $sale->addData($postData);
                $sale->save();
                
                $this->_getSession()->addSuccess(
                    $this->__('The sale has been saved.')
                );
                
                // redirect to remove $_POST data from the request
                return $this->_redirect(
                    'som_localstore_admin/sale/edit', 
                    array('id' => $sale->getId())
                );
            } catch (Exception $e) {
                Mage::logException($e);
                $this->_getSession()->addError($e->getMessage());
            }
            
            /**
             * if we get to here then something went wrong. Continue to
             * render the page as before, the difference being this time 
             * the submitted $_POST data is available.
             */
        }
        
        // make the current sale object available to blocks
        Mage::register('current_sale', $sale);
        
        // instantiate the form container
        $saleEditBlock = $this->getLayout()->createBlock(
            'som_localstore_adminhtml/sale_edit'
        );
        
        // add the form container as the only item on this page
        $this->loadLayout()
            ->_addContent($saleEditBlock)
            ->renderLayout();
    }
    
    public function deleteAction()
    {
        $sale = Mage::getModel('som_localstore/sale');

        if ($saleId = $this->getRequest()->getParam('id', false)) {
            $sale->load($saleId);
        }
        
        if ($sale->getId() < 1) {
            $this->_getSession()->addError(
                $this->__('This sale no longer exists.')
            );
            return $this->_redirect(
                'som_localstore_admin/sale/index'
            );
        }
        
        try {
            $sale->delete();
            
            $this->_getSession()->addSuccess(
                $this->__('The sale has been deleted.')
            );
        } catch (Exception $e) {
            Mage::logException($e);
            $this->_getSession()->addError($e->getMessage());
        }

        return $this->_redirect(
            'som_localstore_admin/sale/index'
        );
    }
    
    /**
     * Thanks to Ben for pointing out this method was missing. Without 
     * this method the ACL rules configured in adminhtml.xml are ignored.
     */
    protected function _isAllowed()
    {
        /**
         * we include this switch to demonstrate that you can add action 
         * level restrictions in your ACL rules. The isAllowed() method will
         * use the ACL rule we have configured in our adminhtml.xml file:
         * - acl 
         * - - resources
         * - - - admin
         * - - - - children
         * - - - - - som_localstore
         * - - - - - - children
         * - - - - - - - sale
         * 
         * eg. you could add more rules inside sale for edit and delete.
         */
        $actionName = $this->getRequest()->getActionName();
        switch ($actionName) {
            case 'index':
            case 'edit':
            case 'delete':
                // intentionally no break
            default:
                $adminSession = Mage::getSingleton('admin/session');
                $isAllowed = $adminSession
                    ->isAllowed('som_localstore/sale');
                break;
        }
        
        return $isAllowed;
    }
}
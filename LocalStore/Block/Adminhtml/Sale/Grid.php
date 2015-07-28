<?php
class Som_LocalStore_Block_Adminhtml_Sale_Grid
    extends Mage_Adminhtml_Block_Widget_Grid
{
    protected function _prepareCollection()
    {
        /**
         * Tell Magento which Collection to use for displaying in the grid.
         */
      
        $collection = Mage::getResourceModel(
            'som_localstore/sale'
        );
        
        $this->setCollection($collection);
        
        return parent::_prepareCollection();
    }
    
    public function getRowUrl($row)
    {
        /**
         * When a grid row is clicked, this is where the user should
         * be redirected to. In our example, the method editAction of 
         * BrandController.php in BrandDirectory module.
         */
        return $this->getUrl(
            'som_localstore_admin/sale/edit', 
            array(
                'id' => $row->getId()
            )
        );
    }

    protected function _prepareColumns()
    {
        /**
         * Here we define which columns we want to be displayed in the grid.
         */
        $this->addColumn('review_id', array(
            'header' => $this->_getHelper()->__('ID'),
            'type' => 'number',
            'index' => 'entity_id',
        ));
        
        $this->addColumn('created_at', array(
            'header' => $this->_getHelper()->__('Created'),
            'type' => 'datetime',
            'index' => 'created_at',
        ));
        
        $this->addColumn('entity_id', array(
            'header' => $this->_getHelper()->__('Entity'),
            'type' => 'datetime',
            'index' => 'updated_at',
        ));
        
        $this->addColumn('entity_pk_value', array(
            'header' => $this->_getHelper()->__('PK Value'),
            'type' => 'text',
            'index' => 'name',
        ));
        
        $this->addColumn('status_id', array(
            'header' => $this->_getHelper()->__('Status Id'),
            'type' => 'text',
            'index' => 'url_key',
        ));
        
        /**
         * Finally we add an action column with an edit link.
         */
        $this->addColumn('action', array(
            'header' => $this->_getHelper()->__('Action'),
            'width' => '50px',
            'type' => 'action',
            'actions' => array(
                array(
                    'caption' => $this->_getHelper()->__('Edit'),
                    'url' => array(
                        'base' => 'som_localstore_admin'
                                  . '/sale/edit',
                    ),
                    'field' => 'id'
                ),
            ),
            'filter' => false,
            'sortable' => false,
            'index' => 'review_id',
        ));
        
        return parent::_prepareColumns();
    }
    
    protected function _getHelper()
    {
        return Mage::helper('som_localstore');
    }
}
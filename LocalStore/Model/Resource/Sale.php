<?php
class Som_LocalStore_Model_Resource_Sale
    extends Mage_Core_Model_Resource_Db_Abstract
{
    protected function _construct()
    {
        /**
         * Tell Magento the database name and primary key field to persist 
         * data to. Similar to the _construct() of our Model, Magento finds 
         * this data from config.xml by finding the <resourceModel/> node 
         * and locating children of <entities/>.
         * 
         * In this example:
         * - som_localstore is the Model alias
         * - sale is the entity referenced in config.xml
         * - review_id is the name of the primary key column
         * 
         * As a result Magento will write data to the table 
         * 'som_localstore_sale' and any calls to 
         * $model->getId() will retrieve the data from the column 
         * named 'review_id'.
         */
      
        $this->_init('review', 'review_id');
    }
}
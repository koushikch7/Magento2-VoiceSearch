<?php
/**
 * CHK_VoiceSearch is a Module for searching by voice)
 *
 * @category    Catalog Search
 * @package     CHK_VoiceSearch
 * @author      Koushik CH <contact@chkoushik.com>
 * @copyright   Koushik CH (https://chkoushik.com)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
namespace CHK\VoiceSearch\Helper;

use Magento\Framework\App\Helper\AbstractHelper;
use Magento\Store\Model\ScopeInterface;

/**
 * Class Data
 * @package CHK\VoiceSearch\Helper
 */
class Data extends AbstractHelper
{
    /**
     * XML PATH for REDIRECT DISABLED
     */
	const XML_PATH_REDIRECTDISABLED = 'voicesearch/';

    /**
     * Get Configuration Values of Voice Search
     *
     * @param $field
     * @param null $storeId
     * @return mixed
     */
	public function getConfigValue($field, $storeId = null)
	{	
		return $this->scopeConfig->getValue(
			$field, ScopeInterface::SCOPE_STORE, $storeId
		);
	}

    /**
     * Get General Configuration Values of Voice Search
     *
     * @param string $code
     * @param int|null $storeId
     * @return mixed
     */
	public function getGeneralConfig($code, $storeId = null)
	{
		return $this->getConfigValue(self::XML_PATH_REDIRECTDISABLED .'general/'. $code, $storeId);
	}

}
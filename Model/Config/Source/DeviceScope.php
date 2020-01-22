<?php
/**
 * MageChk_VoiceSearch is a Module for searching by voice)
 *
 * @category    Catalog Search
 * @package     MageChk_VoiceSearch
 * @author      Koushik CH <contact@chkoushik.com>
 * @copyright   Koushik CH (https://chkoushik.com)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
namespace MageChk\VoiceSearch\Model\Config\Source;

/**
 * Class DeviceScope
 * @package MageChk\VoiceSearch\Model\Config\Source
 */
class DeviceScope implements \Magento\Framework\Option\ArrayInterface
{
    /**
     * Get options array to select the device in the configuration
     *
     * @return array
     */
    public function toOptionArray()
    {
        return [
            ['value' => 'desktop', 'label' => __('Desktop')],
            ['value' => 'mobile', 'label' => __('Mobile')],
            ['value' => 'both', 'label' => __('Both: desktop & mobile')],
        ];
    }
}
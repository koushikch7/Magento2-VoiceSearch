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
namespace Abenedi\SearchByVoice\Model\Config\Source;

/**
 * Class VoiceLanguage
 * @package Abenedi\SearchByVoice\Model\Config\Source
 */
class VoiceLanguage implements \Magento\Framework\Option\ArrayInterface
{
    /**
     * Get Option Values for selected language of the Voice
     *
     * @return array
     */
    public function toOptionArray()
    {

        return [
					['value' => "es-ES", 'label' => __('Spain')],
					['value' => "en-GB", 'label' => __('United Kingdom')],
					['value' => "en-US", 'label' => __('United States')],
        ];
    }
}
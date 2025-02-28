/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import{PanelBody, ToggleControl} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import metadata from './block.json';
import { Curve } from './components/curve';
export default function Edit(props) {
	return (
		<>
			<Curve />
			<p 
			{...useBlockProps.save()}>
			{__("Curvy – hello from the saved content!", metadata.textdomain)}</p>
			<InspectorControls>
				<PanelBody title={__("Top curve", metadata.textdomain)}>
					<div style={{display: "flex"}}>
						<ToggleControl onChange={(isChacked)=>{
							props.setAttributes({enableTopCurve: isChacked});
						}} checked={props.attributes.enableTopCurve} />
						<span>
							{__("Enable top curve", metadata.textdomain)}:
						</span>
					</div>
				</PanelBody>
			</InspectorControls>
		</>
	);
}

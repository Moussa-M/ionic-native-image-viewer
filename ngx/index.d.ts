import { IonicNativePlugin } from '@ionic-native/core';
export interface ImageViewerOptions {
    /**
     * Set to false to disable the share button (Android only). Default: true
     */
    share?: boolean;
}
/**
 * @name Image Viewer
 * @description This plugin can display your image in full screen with the ability to pan, zoom, and share the image.
 * @usage
 * ```typescript
 * import { ImageViewer } from 'ionic-native-image-viewer/ngx';
 *
 * constructor(private imageViewer: ImageViewer) { }
 *
 * ...
 *
 * this.imageViewer.show('https://mysite.com/path/to/image.jpg');
 *
 * this.imageViewer.show('https://mysite.com/path/to/image.jpg', 'Title', {share: true});
 * ```
 */
export declare class ImageViewer extends IonicNativePlugin {
    /**
     * Shows an image in full screen
     * @param url {string} URL or path to image
     * @param title {string}
     * @param options {ImageViewerOptions}
     */
    show(url: string, title?: string, options?: ImageViewerOptions): void;
}

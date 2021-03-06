var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ImageViewerOriginal = /** @class */ (function (_super) {
    __extends(ImageViewerOriginal, _super);
    function ImageViewerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageViewerOriginal.prototype.show = function (url, title, options) { return cordova(this, "show", { "sync": true }, arguments); };
    ImageViewerOriginal.pluginName = "ImageViewer";
    ImageViewerOriginal.plugin = "com-pg-imageviewer";
    ImageViewerOriginal.pluginRef = "ImageViewer";
    ImageViewerOriginal.repo = "https://github.com/moussa-m/imageviewer";
    ImageViewerOriginal.platforms = ["Android", "iOS"];
    return ImageViewerOriginal;
}(IonicNativePlugin));
var ImageViewer = new ImageViewerOriginal();
export { ImageViewer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bob3RvLXZpZXdlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQ3ZDLCtCQUFpQjs7OztJQVFoRCwwQkFBSSxhQUFDLEdBQVcsRUFBRSxLQUFjLEVBQUUsT0FBNEI7Ozs7OztzQkExQ2hFO0VBa0NpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBob3RvVmlld2VyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgc2hhcmUgYnV0dG9uIChBbmRyb2lkIG9ubHkpLiBEZWZhdWx0OiB0cnVlXG4gICAqL1xuICBzaGFyZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQG5hbWUgUGhvdG8gVmlld2VyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gY2FuIGRpc3BsYXkgeW91ciBpbWFnZSBpbiBmdWxsIHNjcmVlbiB3aXRoIHRoZSBhYmlsaXR5IHRvIHBhbiwgem9vbSwgYW5kIHNoYXJlIHRoZSBpbWFnZS5cbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgUGhvdG9WaWV3ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3Bob3RvLXZpZXdlci9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcGhvdG9WaWV3ZXI6IFBob3RvVmlld2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycpO1xuICpcbiAqIHRoaXMucGhvdG9WaWV3ZXIuc2hvdygnaHR0cHM6Ly9teXNpdGUuY29tL3BhdGgvdG8vaW1hZ2UuanBnJywgJ015IGltYWdlIHRpdGxlJywge3NoYXJlOiBmYWxzZX0pO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnUGhvdG9WaWV3ZXInLFxuICBwbHVnaW46ICdjb20tc2Fycmlhcm9tYW4tcGhvdG92aWV3ZXInLFxuICBwbHVnaW5SZWY6ICdQaG90b1ZpZXdlcicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2Fycmlhcm9tYW4vcGhvdG92aWV3ZXInLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQaG90b1ZpZXdlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFNob3dzIGFuIGltYWdlIGluIGZ1bGwgc2NyZWVuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gVVJMIG9yIHBhdGggdG8gaW1hZ2VcbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBvcHRpb25zIHtQaG90b1ZpZXdlck9wdGlvbnN9XG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2hvdyh1cmw6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBQaG90b1ZpZXdlck9wdGlvbnMpOiB2b2lkIHt9XG59XG4iXX0=
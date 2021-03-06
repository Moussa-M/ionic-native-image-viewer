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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var ImageViewer = /** @class */ (function (_super) {
    __extends(ImageViewer, _super);
    function ImageViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageViewer.prototype.show = function (url, title, options) { return cordova(this, "show", { "sync": true }, arguments); };
    ImageViewer.pluginName = "ImageViewer";
    ImageViewer.plugin = "com-pg-imageviewer";
    ImageViewer.pluginRef = "ImageViewer";
    ImageViewer.repo = "https://github.com/moussa-m/imageviewer";
    ImageViewer.platforms = ["Android",];
    ImageViewer = __decorate([
        Injectable()
    ], ImageViewer);
    return ImageViewer;
}(IonicNativePlugin));
export { ImageViewer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3Bob3RvLXZpZXdlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpQ3ZDLCtCQUFpQjs7OztJQVFoRCwwQkFBSSxhQUFDLEdBQVcsRUFBRSxLQUFjLEVBQUUsT0FBNEI7Ozs7OztJQVJuRCxXQUFXO1FBRHZCLFVBQVUsRUFBRTtPQUNBLFdBQVc7c0JBbEN4QjtFQWtDaUMsaUJBQWlCO1NBQXJDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQaG90b1ZpZXdlck9wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIHNoYXJlIGJ1dHRvbiAoQW5kcm9pZCBvbmx5KS4gRGVmYXVsdDogdHJ1ZVxuICAgKi9cbiAgc2hhcmU/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIFBob3RvIFZpZXdlclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGNhbiBkaXNwbGF5IHlvdXIgaW1hZ2UgaW4gZnVsbCBzY3JlZW4gd2l0aCB0aGUgYWJpbGl0eSB0byBwYW4sIHpvb20sIGFuZCBzaGFyZSB0aGUgaW1hZ2UuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFBob3RvVmlld2VyIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9waG90by12aWV3ZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBob3RvVmlld2VyOiBQaG90b1ZpZXdlcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnKTtcbiAqXG4gKiB0aGlzLnBob3RvVmlld2VyLnNob3coJ2h0dHBzOi8vbXlzaXRlLmNvbS9wYXRoL3RvL2ltYWdlLmpwZycsICdNeSBpbWFnZSB0aXRsZScsIHtzaGFyZTogZmFsc2V9KTtcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1Bob3RvVmlld2VyJyxcbiAgcGx1Z2luOiAnY29tLXNhcnJpYXJvbWFuLXBob3Rvdmlld2VyJyxcbiAgcGx1Z2luUmVmOiAnUGhvdG9WaWV3ZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NhcnJpYXJvbWFuL3Bob3Rvdmlld2VyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGhvdG9WaWV3ZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTaG93cyBhbiBpbWFnZSBpbiBmdWxsIHNjcmVlblxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IFVSTCBvciBwYXRoIHRvIGltYWdlXG4gICAqIEBwYXJhbSB0aXRsZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UGhvdG9WaWV3ZXJPcHRpb25zfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3codXJsOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBvcHRpb25zPzogUGhvdG9WaWV3ZXJPcHRpb25zKTogdm9pZCB7fVxufVxuIl19
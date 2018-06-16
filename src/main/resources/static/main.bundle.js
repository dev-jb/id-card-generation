webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_network_group_add_network_group_add_network_group_component__ = __webpack_require__("../../../../../src/app/components/network-group/add-network-group/add-network-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_network_group_list_network_group_list_network_group_component__ = __webpack_require__("../../../../../src/app/components/network-group/list-network-group/list-network-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_loyalty_loyalty_component__ = __webpack_require__("../../../../../src/app/components/loyalty/loyalty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_store_store_add_store_add_component__ = __webpack_require__("../../../../../src/app/components/store/store-add/store-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_store_store_list_store_list_component__ = __webpack_require__("../../../../../src/app/components/store/store-list/store-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_customers_add_customers_add_customers_component__ = __webpack_require__("../../../../../src/app/components/customers/add-customers/add-customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_customers_list_customers_list_customers_component__ = __webpack_require__("../../../../../src/app/components/customers/list-customers/list-customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_points_points_trasaction_points_trasaction_component__ = __webpack_require__("../../../../../src/app/components/points/points-trasaction/points-trasaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_advertisement_list_advertisement_list_advertisement_component__ = __webpack_require__("../../../../../src/app/components/advertisement/list-advertisement/list-advertisement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_store_store_top_spender_store_top_spender_component__ = __webpack_require__("../../../../../src/app/components/store/store-top-spender/store-top-spender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_advertisement_add_advertisement_add_advertisement_component__ = __webpack_require__("../../../../../src/app/components/advertisement/add-advertisement/add-advertisement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_customers_customer_transaction_add_transaction_add_transaction_component__ = __webpack_require__("../../../../../src/app/components/customers/customer-transaction/add-transaction/add-transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_customers_customer_transaction_view_transaction_view_transaction_component__ = __webpack_require__("../../../../../src/app/components/customers/customer-transaction/view-transaction/view-transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_store_store_transaction_detail_store_transaction_detail_component__ = __webpack_require__("../../../../../src/app/components/store/store-transaction-detail/store-transaction-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_customers_customer_register_customer_register_component__ = __webpack_require__("../../../../../src/app/components/customers/customer-register/customer-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_network_group_group_transaction_detail_group_transaction_detail_component__ = __webpack_require__("../../../../../src/app/components/network-group/group-transaction-detail/group-transaction-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_15__components_home_home_component__["a" /* HomeComponent */],
        children: [
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'group/group_list', component: __WEBPACK_IMPORTED_MODULE_3__components_network_group_list_network_group_list_network_group_component__["a" /* ListNetworkGroupComponent */] },
            { path: 'group/group_add', component: __WEBPACK_IMPORTED_MODULE_2__components_network_group_add_network_group_add_network_group_component__["a" /* AddNetworkGroupComponent */] },
            { path: 'add-advertisement', component: __WEBPACK_IMPORTED_MODULE_13__components_advertisement_add_advertisement_add_advertisement_component__["a" /* AddAdvertisementComponent */] },
            { path: 'loyalty', component: __WEBPACK_IMPORTED_MODULE_4__components_loyalty_loyalty_component__["a" /* LoyaltyComponent */] },
            { path: 'list-advertisement', component: __WEBPACK_IMPORTED_MODULE_10__components_advertisement_list_advertisement_list_advertisement_component__["a" /* ListAdvertisementComponent */] },
            { path: 'store/store_list', component: __WEBPACK_IMPORTED_MODULE_6__components_store_store_list_store_list_component__["a" /* StoreListComponent */] },
            { path: 'store/store_list/:id', component: __WEBPACK_IMPORTED_MODULE_6__components_store_store_list_store_list_component__["a" /* StoreListComponent */] },
            { path: 'store/store_add', component: __WEBPACK_IMPORTED_MODULE_5__components_store_store_add_store_add_component__["a" /* StoreAddComponent */] },
            { path: 'store/top_spender', component: __WEBPACK_IMPORTED_MODULE_12__components_store_store_top_spender_store_top_spender_component__["a" /* StoreTopSpenderComponent */] },
            { path: 'store/transaction_details', component: __WEBPACK_IMPORTED_MODULE_18__components_store_store_transaction_detail_store_transaction_detail_component__["a" /* StoreTransactionDetailComponent */] },
            { path: 'customer/add_customer', component: __WEBPACK_IMPORTED_MODULE_7__components_customers_add_customers_add_customers_component__["a" /* AddCustomersComponent */] },
            { path: 'customer/list_customer', component: __WEBPACK_IMPORTED_MODULE_8__components_customers_list_customers_list_customers_component__["a" /* ListCustomersComponent */] },
            { path: 'customer_register', component: __WEBPACK_IMPORTED_MODULE_19__components_customers_customer_register_customer_register_component__["a" /* CustomerRegisterComponent */] },
            { path: 'pointTransaction', component: __WEBPACK_IMPORTED_MODULE_9__components_points_points_trasaction_points_trasaction_component__["a" /* PointsTrasactionComponent */] },
            { path: 'customer_transaction/add_transaction', component: __WEBPACK_IMPORTED_MODULE_16__components_customers_customer_transaction_add_transaction_add_transaction_component__["a" /* AddTransactionComponent */] },
            { path: 'customer_transaction/view_transactions', component: __WEBPACK_IMPORTED_MODULE_17__components_customers_customer_transaction_view_transaction_view_transaction_component__["a" /* ViewTransactionComponent */] },
            { path: 'group/transaction_details', component: __WEBPACK_IMPORTED_MODULE_20__components_network_group_group_transaction_detail_group_transaction_detail_component__["a" /* GroupTransactionDetailComponent */] }
        ]
    },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_loyalty_loyalty_component__ = __webpack_require__("../../../../../src/app/components/loyalty/loyalty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_store_store_add_store_add_component__ = __webpack_require__("../../../../../src/app/components/store/store-add/store-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_store_store_list_store_list_component__ = __webpack_require__("../../../../../src/app/components/store/store-list/store-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_network_group_list_network_group_list_network_group_component__ = __webpack_require__("../../../../../src/app/components/network-group/list-network-group/list-network-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_network_group_add_network_group_add_network_group_component__ = __webpack_require__("../../../../../src/app/components/network-group/add-network-group/add-network-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_customers_add_customers_add_customers_component__ = __webpack_require__("../../../../../src/app/components/customers/add-customers/add-customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_customers_list_customers_list_customers_component__ = __webpack_require__("../../../../../src/app/components/customers/list-customers/list-customers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_advertisement_list_advertisement_list_advertisement_component__ = __webpack_require__("../../../../../src/app/components/advertisement/list-advertisement/list-advertisement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_store_store_top_spender_store_top_spender_component__ = __webpack_require__("../../../../../src/app/components/store/store-top-spender/store-top-spender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_points_points_trasaction_points_trasaction_component__ = __webpack_require__("../../../../../src/app/components/points/points-trasaction/points-trasaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_advertisement_add_advertisement_add_advertisement_component__ = __webpack_require__("../../../../../src/app/components/advertisement/add-advertisement/add-advertisement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_customers_customer_transaction_add_transaction_add_transaction_component__ = __webpack_require__("../../../../../src/app/components/customers/customer-transaction/add-transaction/add-transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_customers_customer_transaction_view_transaction_view_transaction_component__ = __webpack_require__("../../../../../src/app/components/customers/customer-transaction/view-transaction/view-transaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_store_store_transaction_detail_store_transaction_detail_component__ = __webpack_require__("../../../../../src/app/components/store/store-transaction-detail/store-transaction-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_customers_customer_register_customer_register_component__ = __webpack_require__("../../../../../src/app/components/customers/customer-register/customer-register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_network_group_group_transaction_detail_group_transaction_detail_component__ = __webpack_require__("../../../../../src/app/components/network-group/group-transaction-detail/group-transaction-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_service_advertisement_advertisement_service__ = __webpack_require__("../../../../../src/app/shared-service/advertisement/advertisement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__shared_service_upload_file_upload_file_service__ = __webpack_require__("../../../../../src/app/shared-service/upload-file/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_service_group_service_network_group_service__ = __webpack_require__("../../../../../src/app/shared-service/group-service/network-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_service_loyalty_loyalty_update_service__ = __webpack_require__("../../../../../src/app/shared-service/loyalty/loyalty-update.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_service_customer_services_customer_service_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_service_point_services_point_service_service__ = __webpack_require__("../../../../../src/app/shared-service/point-services/point-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_service_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared-service/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_service_custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_service_customer_registration_customer_registration_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-registration/customer-registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_service_user_user_service__ = __webpack_require__("../../../../../src/app/shared-service/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_loyalty_loyalty_component__["a" /* LoyaltyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_store_store_list_store_list_component__["a" /* StoreListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_network_group_list_network_group_list_network_group_component__["a" /* ListNetworkGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_network_group_add_network_group_add_network_group_component__["a" /* AddNetworkGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_network_group_add_network_group_add_network_group_component__["a" /* AddNetworkGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_store_store_add_store_add_component__["a" /* StoreAddComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_customers_add_customers_add_customers_component__["a" /* AddCustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_customers_list_customers_list_customers_component__["a" /* ListCustomersComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_points_points_trasaction_points_trasaction_component__["a" /* PointsTrasactionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_advertisement_list_advertisement_list_advertisement_component__["a" /* ListAdvertisementComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_advertisement_add_advertisement_add_advertisement_component__["a" /* AddAdvertisementComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_store_store_top_spender_store_top_spender_component__["a" /* StoreTopSpenderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_customers_customer_transaction_add_transaction_add_transaction_component__["a" /* AddTransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_customers_customer_transaction_view_transaction_view_transaction_component__["a" /* ViewTransactionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_store_store_transaction_detail_store_transaction_detail_component__["a" /* StoreTransactionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_customers_customer_register_customer_register_component__["a" /* CustomerRegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_network_group_group_transaction_detail_group_transaction_detail_component__["a" /* GroupTransactionDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_36__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular_datatables__["a" /* DataTablesModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_33__shared_service_authentication_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_34__shared_service_custom_request_option_service__["a" /* CustomRequestOptionService */],
                __WEBPACK_IMPORTED_MODULE_26__shared_service_store_service_store_service__["a" /* StoreService */],
                __WEBPACK_IMPORTED_MODULE_27__shared_service_advertisement_advertisement_service__["a" /* AdvertisementService */],
                __WEBPACK_IMPORTED_MODULE_28__shared_service_upload_file_upload_file_service__["a" /* UploadFileService */],
                __WEBPACK_IMPORTED_MODULE_29__shared_service_group_service_network_group_service__["a" /* NetworkGroupService */],
                __WEBPACK_IMPORTED_MODULE_30__shared_service_loyalty_loyalty_update_service__["a" /* LoyaltyUpdateService */],
                __WEBPACK_IMPORTED_MODULE_31__shared_service_customer_services_customer_service_service__["a" /* CustomerServiceService */],
                __WEBPACK_IMPORTED_MODULE_32__shared_service_point_services_point_service_service__["a" /* PointServiceService */],
                __WEBPACK_IMPORTED_MODULE_35__shared_service_customer_registration_customer_registration_service__["a" /* CustomerRegistrationService */],
                __WEBPACK_IMPORTED_MODULE_37__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_38__shared_service_user_user_service__["a" /* UserService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/advertisement/add-advertisement/add-advertisement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-check {\r\n    padding-left: 0rem;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;    \r\n}\r\nselect.ng-invalid.ng-touched{\r\n    border: 1px solid red;    \r\n}\r\n.help-block{\r\n    color:red;\r\n}\r\ndiv.store-form{\r\n    background-color:#f5f5f5;\r\n    border:#f5f5f5;\r\n    border-radius:10px;\r\n\r\n   -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n\r\n           box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n}\r\ndiv.form-holder{\r\n   \r\n    padding:15px;\r\n}\r\ndiv.store-form-holder{\r\n    padding:35px 38px 50px 44px\r\n}\r\n.control-label.required:after { \r\n    color: #d00;\r\n    content: \"*\";\r\n    position: absolute;\r\n    margin-left: 5px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/advertisement/add-advertisement/add-advertisement.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  10px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Add Advertisement</h3>\r\n<div class=\"container\">\r\n  <div class=\"store-form\">\r\n    <div class=\"jumbotron\">\r\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" enctype=\"multipart/form-data\">\r\n        <div class=\"form-group\">\r\n          <label for=\"groupName\">Group Name</label>\r\n          <select class=\"form-control\" id=\"section\" ngModel name=\"groupName\" (ngModelChange)=\"onChange($event)\" [(ngModel)]=\"advertisement.networkGroup\"\r\n            required>\r\n            <option value=\"\">--Select Group--</option>\r\n            <option *ngFor=\"let group of groupList\" [ngValue]=\"group\">{{group.groupName}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"timeDuration\">Time Duration</label>\r\n          <input type=\"date\" class=\"form-control\" id=\"timeDuration\" ngModel name=\"timeDuration\" [(ngModel)]=\"advertisement.timeDuration\"\r\n            required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"imagePath\">Image Path</label>\r\n          <input type=\"file\" (change)=\"readUrl($event)\" class=\"form-control\" id=\"imagePath\" ngModel name=\"imagePath\" [(ngModel)]=\"imagePath\">\r\n          <img *ngIf=\"url!=''\" [src]=\"url\" width=\"100px\" height=\"100px\">\r\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"uploadAdvertisement()\">Select</button>\r\n        </div>\r\n\r\n        <fieldset class=\"form-group\">\r\n          <label for=\"advertCost\">Advertisement Cost</label>\r\n          <div class=\"form-check\">\r\n            <label class=\"radio-inline\">\r\n              <input type=\"radio\" name=\"optionsRadio\" value=\"free\" checked (click)=\"freePayCheck($event.target.value)\"> Free\r\n            </label>\r\n            <label class=\"radio-inline\">\r\n              <input type=\"radio\" name=\"optionsRadio\" value=\"paid\" (click)=\"freePayCheck($event.target.value)\"> Paid\r\n            </label>\r\n          </div>\r\n        </fieldset>\r\n\r\n        <div class=\"form-group\" *ngIf=\"costOption=='paid'\">\r\n          <label for=\"storeName\">Store Name</label>\r\n          <select class=\"form-control\" id=\"storeName\" ngModel name=\"storeName\" [(ngModel)]=\"advertisement.store[0]\" required>\r\n            <option value=\"\">--Select Store--</option>\r\n            <option *ngFor=\"let store of storeList\" [ngValue]=\"store\">{{store.storeName}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group\" *ngIf=\"costOption=='paid'\">\r\n          <label for=\"amount\">Amount</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"advertCost\" name=\"advertCost\" pattern=\"[0-9]*\" ngModel [(ngModel)]=\"advertisement.advertCost\"\r\n            required>\r\n          <span class=\"help-block\" class=\"form-text text-muted\">Please enter number only</span>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!f.valid\">Add</button>\r\n        <button type=\"reset\" class=\"btn btn-danger\">Cancel</button>\r\n\r\n      </form>\r\n\r\n      <!-- Success Modal -->\r\n      <div id=\"successModal\" class=\"modal fade\">\r\n          <div class=\"modal-dialog modal-success\">\r\n              <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                      <div class=\"icon-box\">\r\n                          <i class=\"fa fa-check\"></i>\r\n                      </div>\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                  </div>\r\n                  <div class=\"modal-body text-center\">\r\n                      <h4>Success!</h4>\r\n                      <h5>Advertisement Added Successfully</h5>\r\n                      <button class=\"btn btn-success\" (click)=\"success()\" data-dismiss=\"modal\">Close</button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/advertisement/add-advertisement/add-advertisement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdvertisementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_upload_file_upload_file_service__ = __webpack_require__("../../../../../src/app/shared-service/upload-file/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_group_service_network_group_service__ = __webpack_require__("../../../../../src/app/shared-service/group-service/network-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_advertisement_advertisement_service__ = __webpack_require__("../../../../../src/app/shared-service/advertisement/advertisement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddAdvertisementComponent = /** @class */ (function () {
    function AddAdvertisementComponent(_advertisementService, _router, _networkGroupService, _storeService, _fileUploadService) {
        this._advertisementService = _advertisementService;
        this._router = _router;
        this._networkGroupService = _networkGroupService;
        this._storeService = _storeService;
        this._fileUploadService = _fileUploadService;
        this.advertisement = {
            id: null,
            networkGroup: null,
            timeDuration: null,
            advertCost: null,
            imageFile: null,
            // store: [],
            store: [{
                    id: null,
                    storeName: "",
                    address: "",
                    contactName: "",
                    contactNo: null,
                    email: "",
                    loyalty: null,
                    networkGroup: null,
                    points: {
                        id: null,
                        totalPoints: null
                    },
                    totalPoints: null,
                    pointsSpend: null
                }],
            imagePath: ""
        };
        this.groupList = [];
        this.storeList = [];
        this.groupName = "";
        this.costOption = "";
        // network : NetworkGroup={
        //   groupId: null,
        //     groupName: '',
        //     address: '',
        //     contactNo: null,
        //     detail: '',
        //     store: null
        // }
        this.url = "";
        this.imagePath = "";
        this.errorMessage = null;
        this.uploadButton = false;
        this.advertCost = null;
    }
    AddAdvertisementComponent.prototype.freePayCheck = function (val) {
        this.costOption = val;
    };
    AddAdvertisementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._networkGroupService.getGroup().subscribe(function (groupList) {
            _this.groupList = groupList;
        });
        this._storeService.getStores().subscribe(function (storeList) {
            _this.storeList = storeList;
        });
    };
    AddAdvertisementComponent.prototype.readUrl = function (event) {
        var _this = this;
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        this.advertisement.imageFile = files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AddAdvertisementComponent.prototype.onChange = function (value) {
        var _this = this;
        console.log(value.groupName);
        this._storeService.getStoreByGroupId(value.groupId).subscribe(function (storeList) {
            _this.storeList = storeList;
            console.log(_this.storeList);
        });
    };
    AddAdvertisementComponent.prototype.uploadAdvertisement = function () {
        var _this = this;
        console.log("Triggered");
        if (this.file != undefined) {
            this._fileUploadService.pushFileToStorage(this.file).map(function (response) {
            }).catch(function (error) {
                return _this.errorMessage = "Failed upload";
            });
            this.uploadButton = true;
        }
    };
    AddAdvertisementComponent.prototype.onSubmit = function () {
        this._advertisementService.addAdvertisement(this.advertisement).subscribe(function (advertisement) {
            console.log(advertisement);
        }, function (error) {
            $("#successModal").modal("show");
        });
    };
    AddAdvertisementComponent.prototype.success = function () {
        $("#successModal").modal("hide");
        this._router.navigate(['/home/list-advertisement']);
    };
    AddAdvertisementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-advertisement',
            template: __webpack_require__("../../../../../src/app/components/advertisement/add-advertisement/add-advertisement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/advertisement/add-advertisement/add-advertisement.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_service_advertisement_advertisement_service__["a" /* AdvertisementService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_group_service_network_group_service__["a" /* NetworkGroupService */], __WEBPACK_IMPORTED_MODULE_5__shared_service_store_service_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_upload_file_upload_file_service__["a" /* UploadFileService */]])
    ], AddAdvertisementComponent);
    return AddAdvertisementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/advertisement/list-advertisement/list-advertisement.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/advertisement/list-advertisement/list-advertisement.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  3px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Advertisement List</h3>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <button class=\"btn-hasIcon btn btn-primary pull-right add-store\" (click)=\"newAdvertisement()\">\r\n        <i class=\"fa fa-plus\"></i>&nbsp;\r\n        <span>Add Advertisement</span>\r\n      </button>\r\n      <div style=\"clear:both; margin-bottom:30px;\"></div>\r\n\r\n      <div class=\"dataTables_wrapper form-inline\">\r\n        <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.N</th>\r\n              <th>Network Group</th>\r\n              <th>Store</th>\r\n              <th>Advertisement Cost</th>\r\n              <th>Expired Date</th>\r\n              <th>Image</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let advertisement of advertisementList'>\r\n              <td>{{advertisement.id}}</td>\r\n              <td>{{advertisement.networkGroup.groupName}}</td>\r\n              <!-- <td *ngIf=\"advertisement.store!=null; else elseBlock\">{{advertisement.store.storeName}}</td>\r\n                      <ng-template #elseBlock>\r\n                        <td></td>\r\n                      </ng-template> -->\r\n              <td>\r\n                <span *ngFor=\"let store of advertisement.store\">\r\n                  {{store.storeName}}\r\n                  <br>\r\n                  <br>\r\n                </span>\r\n              </td>\r\n              <td>{{advertisement.advertCost}}</td>\r\n              <td>{{advertisement.timeDuration}}</td>\r\n              <td>\r\n                <img [src]=\"_sanitizer.bypassSecurityTrustUrl(advertisement.imagePath)\" width=\"100px\" height=\"100px\">\r\n              </td>\r\n              <td>\r\n                <button type=\"button\" name=\"edit\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"updateAdvertisement(advertisement)\">Edit</button>\r\n                <button type=\"submit\" name=\"delete\" class=\"btn btn-danger\" (click)=\"deleteAdvertisement(advertisement)\">Delete</button>\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- Delete modal -->\r\n      <div id=\"deleteModal\" class=\"modal fade\">\r\n        <div class=\"modal-dialog modal-delete\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <div class=\"icon-box\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </div>\r\n              <h4 class=\"modal-title\">Are you sure?</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>Do you really want to delete this advertisement? This process cannot be undone.</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirmDelete()\">Delete</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Modal -->\r\n      <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <form (ngSubmit)=\"onUpdate()\" #f=\"ngForm\" id=\"editForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Update Group</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"modal-body\">\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"groupName\">Group Name</label>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"timeDuration\">Time Duration</label>\r\n                  <input type=\"date\" class=\"form-control\" id=\"timeDuration\" ngModel name=\"timeDuration\" [(ngModel)]=\"advertisement.timeDuration\"\r\n                    required>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group\">\r\n                <label for=\"imagePath\">Image Path</label>\r\n                <input type=\"file\" (change)= \"readUrl($event)\" class=\"form-control\" id=\"imagePath\" ngModel name=\"imagePath\" [(ngModel)]=\"imagePath\">\r\n                <img *ngIf=\"url!=''\" [src]=\"url\" width=\"100px\" height=\"100px\">\r\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"uploadAdvertisement()\" >Select</button>\r\n              </div> -->\r\n\r\n                <hr>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!f.valid\">Update</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/advertisement/list-advertisement/list-advertisement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListAdvertisementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_advertisement_advertisement_service__ = __webpack_require__("../../../../../src/app/shared-service/advertisement/advertisement.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListAdvertisementComponent = /** @class */ (function () {
    function ListAdvertisementComponent(_advertisementService, _router, _sanitizer) {
        this._advertisementService = _advertisementService;
        this._router = _router;
        this._sanitizer = _sanitizer;
        this.advertisement = {
            id: null,
            networkGroup: null,
            timeDuration: null,
            advertCost: null,
            imageFile: null,
            store: null,
            imagePath: ""
        };
        this.imageData = [];
    }
    // sanitizedUrl;
    ListAdvertisementComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            $(document).ready(function () {
                $('#pagination').DataTable();
            });
        }, 3000);
        this._advertisementService.getAllAdvertisement().subscribe(function (advertisement) {
            console.log(advertisement);
            _this.advertisementList = advertisement;
            console.log(_this.advertisementList);
            // this.sanitizedUrl=this._sanitizer.bypassSecurityTrustUrl(advertisement.imagePath);
            // console.log(this.sanitizedUrl);
        });
    };
    ListAdvertisementComponent.prototype.updateAdvertisement = function (advertisement) {
        this.advertisement = advertisement;
    };
    ListAdvertisementComponent.prototype.deleteAdvertisement = function (advertisement) {
        this.advertisementForDelete = advertisement;
        $("#deleteModal").modal("show");
    };
    ListAdvertisementComponent.prototype.confirmDelete = function () {
        var _this = this;
        this._advertisementService.deleteAdvertisement(this.advertisementForDelete.id).subscribe(function (data) {
            _this.advertisementList.splice(_this.advertisementList.indexOf(_this.advertisementForDelete), 1);
            _this._router.navigate(['/home/list-advertisement']);
            $("#deleteModal").modal("hide");
        });
    };
    ListAdvertisementComponent.prototype.onUpdate = function () {
        var _this = this;
        this._advertisementService.updateAdvertisement(this.advertisement).subscribe(function (advertisement) {
            console.log(advertisement);
            $('#myModal').modal("hide");
            _this._router.navigate(['/home/list-advertisement']);
        });
    };
    ListAdvertisementComponent.prototype.newAdvertisement = function () {
        this._router.navigate(['/home/add-advertisement']);
    };
    ListAdvertisementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-advertisement',
            template: __webpack_require__("../../../../../src/app/components/advertisement/list-advertisement/list-advertisement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/advertisement/list-advertisement/list-advertisement.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_service_advertisement_advertisement_service__["a" /* AdvertisementService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* DomSanitizer */]])
    ], ListAdvertisementComponent);
    return ListAdvertisementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/customers/add-customers/add-customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.store-form{\r\n    background-color:#f5f5f5;\r\n    border:#f5f5f5;\r\n    border-radius:10px;\r\n\r\n   -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n\r\n           box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n}\r\ndiv.form-holder{\r\n   \r\n    padding:15px;\r\n}\r\ndiv.store-form-holder{\r\n    padding:35px 38px 50px 44px\r\n}\r\n.control-label.required:after { \r\n    color: #d00;\r\n    content: \"*\";\r\n    position: absolute;\r\n    margin-left: 5px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customers/add-customers/add-customers.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  10px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Add Customer</h3>\r\n\r\n<div class=\"container-fluid\">\r\n      <div class=\"store-form\">\r\n\r\n            <div class=\"jumbotron\">\r\n          <form (submit)=\"submitForm()\" [formGroup]=\"customerForm\">\r\n\r\n            <div class=\"form-group\" [ngClass]=\"displayFieldCss('customerName')\">\r\n              <label for=\"customerName\">Customer Name</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Customer Name\" id=\"customerName\" formControlName=\"customerName\">\r\n              <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('customerName')\" style=\"color:#a94442;\">\r\n                <p *ngIf=\"customerForm.controls['customerName'].errors.required\">Customer Name is required</p>\r\n                <p *ngIf=\"customerForm.controls['customerName'].errors.minlength\">Customer Name must be 4 characters long.</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"displayFieldCss('currentAddress')\">\r\n              <label for=\"address\">Address</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Customer address\" id=\"address\" formControlName=\"currentAddress\">\r\n              <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('currentAddress')\" style=\"color:#a94442;\">\r\n                <p *ngIf=\"customerForm.controls['currentAddress'].errors.required\">Address is required</p>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"displayFieldCss('email')\">\r\n              <label for=\"email\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email\" id=\"email\" formControlName=\"email\">\r\n              <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('email')\" style=\"color:#a94442;\">\r\n                <p *ngIf=\"customerForm.controls['email'].errors.required\">Email Address is required</p>\r\n                <p *ngIf=\"customerForm.controls['email'].errors.email\">Please Enter Valid Email Address</p>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"displayFieldCss('mobileNo')\">\r\n              <label for=\"contactNo\">Contact No</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" id=\"contactNo\" formControlName=\"mobileNo\">\r\n              <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('mobileNo')\" style=\"color:#a94442;\">\r\n                <p *ngIf=\"customerForm.controls['mobileNo'].errors.required\">Contact Number is required</p>\r\n                <p *ngIf=\"customerForm.controls['mobileNo'].errors.pattern\"> Contact Number Must be Between 0-9</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"displayFieldCss('userName')\">\r\n              <label for=\"user\">User Name</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" id=\"user\" formControlName=\"userName\">\r\n              <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('userName')\" style=\"color:#a94442;\">\r\n                <p *ngIf=\"customerForm.controls['userName'].errors.required\">User Name is required</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"displayFieldCss('password')\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" id=\"password\" formControlName=\"password\">\r\n              <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('password')\" style=\"color:#a94442;\">\r\n                <p *ngIf=\"customerForm.controls['password'].errors.required\">password is required</p>\r\n                <p *ngIf=\"customerForm.controls['password'].errors.minlength\">Password must be 8 characters long.</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div formArrayName=\"points\">\r\n              <div *ngFor=\"let point of getControls(customerForm, 'points');let totalPoints = index\" [formGroupName]=\"totalPoints\">\r\n                <div class=\"form-group\"  >\r\n                  <!-- [ngClass]=\"displayFieldCss('points.value')\" -->\r\n                  <label for=\"point\">Points</label>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Point\" id=\"point\" formControlName=\"totalPoints\">\r\n                  <!-- <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('points.value')\" style=\"color:#a94442;\">\r\n                  </div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\" [ngClass]=\"displayFieldCss('dob')\">\r\n              <label for=\"dob\">Date Of Birth</label>\r\n              <input type=\"date\" class=\"form-control\" placeholder=\"Date of Birth\" id=\"dob\" formControlName=\"dob\">\r\n\r\n\r\n              <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('dob')\" style=\"color:#a94442;\">\r\n                <p *ngIf=\"customerForm.controls['dob'].errors.required\">Please Enter Valid Date Of Birth d</p>\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <div>\r\n              <label for=\"male\">Sex</label>\r\n              <br>\r\n              <div class=\"form-check form-check-inline\">\r\n                <input class=\"form-check-input\" type=\"radio\" formControlName=\"sex\" id=\"male\" value=\"Male\" checked>\r\n                <label class=\"form-check-label\" for=\"male\">\r\n                  Male \r\n                </label>\r\n                <input class=\"form-check-input\" type=\"radio\" formControlName=\"sex\" id=\"female\" value=\"Female\">\r\n                <label class=\"form-check-label\" for=\"female\">\r\n                  Female\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <br>\r\n        \r\n            <div class=\"form-group\">\r\n                <label for=\"imagePath\">Customer Image</label>\r\n                <input type=\"file\" (change)= \"readUrl($event)\" class=\"form-control\" id=\"imagePath\" ngModel name=\"imagePath\" [(ngModel)]=\"imagePath\" [ngModelOptions]=\"{standalone: true}\">\r\n                <img *ngIf=\"url!=''\" [src]=\"url\" width=\"100px\" height=\"100px\">\r\n                <button type=\"button\" class=\"btn btn-success\" (click)=\"uploadCustomerImage()\" >Select</button>\r\n              </div>\r\n\r\n            <div class=\"form-group\" formArrayName=\"store\">\r\n                <label for=\"storeId\">Store Name</label>\r\n                <div *ngFor=\"let stored of getControls(customerForm, 'store'); let idx = index\" [formGroupName]=\"idx\">\r\n                  <select class=\"form-control\" id=\"storeId\" formControlName=\"id\">\r\n                    <option *ngFor=\"let store of stores\" [ngValue]=\"store.id\">{{store.storeName}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"submit\" class=\"btn btn-success pull-right col-2\" value=\"Save\">\r\n            </div>\r\n\r\n          </form>\r\n\r\n          <!-- Success Modal -->\r\n          <div id=\"successModal\" class=\"modal fade\">\r\n              <div class=\"modal-dialog modal-success\">\r\n                  <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                          <div class=\"icon-box\">\r\n                              <i class=\"fa fa-check\"></i>\r\n                          </div>\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                      </div>\r\n                      <div class=\"modal-body text-center\">\r\n                          <h4>Success!</h4>\r\n                          <h5>Customer Added Successfully</h5>\r\n                          <button class=\"btn btn-success\" (click)=\"success()\" data-dismiss=\"modal\">Close</button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n          <!-- Error Modal -->\r\n          <div id=\"failureModal\" class=\"modal fade\">\r\n              <div class=\"modal-dialog modal-error\">\r\n                  <div class=\"modal-content\">\r\n                      <div class=\"modal-header\">\r\n                          <div class=\"icon-box\">\r\n                              <i class=\"fa fa-times\"></i>\r\n                          </div>\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                      </div>\r\n                      <div class=\"modal-body text-center\">\r\n                          <h4>Ooops!</h4>\r\n                          <h5>{{errorMessage.message}}</h5>\r\n                          <button class=\"btn btn-success\" data-dismiss=\"modal\">Try Again</button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/customers/add-customers/add-customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_customer_services_customer_service_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_upload_file_upload_file_service__ = __webpack_require__("../../../../../src/app/shared-service/upload-file/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddCustomersComponent = /** @class */ (function () {
    function AddCustomersComponent(_customerService, _storeService, _router, _formBuilder, _fileUploadService) {
        this._customerService = _customerService;
        this._storeService = _storeService;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this._fileUploadService = _fileUploadService;
        this.stores = [];
        this.storeCustomer = {
            id: null,
            storeName: "",
            contactName: "",
            email: "",
            address: "",
            contactNo: 0,
            networkGroup: null,
            points: null,
            pointsSpend: null,
            loyalty: null,
            totalPoints: null
        };
        this.url = "";
        this.imagePath = "";
        this.errorUpload = null;
        this.uploadButton = false;
        this.errorMessage = {
            message: ""
        };
    }
    AddCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storeService.getStores().subscribe(function (data) {
            _this.stores = data;
        });
        this.createCustomerForm();
        // console.log(this.customerFormArray.push(this._formBuilder.group(new Store())));
    };
    AddCustomersComponent.prototype.getControls = function (frmGrp, key) {
        return frmGrp.controls[key].controls;
    };
    AddCustomersComponent.prototype.createCustomerForm = function () {
        this.customerForm = this._formBuilder.group({
            "customerName": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(4)]],
            "currentAddress": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            "email": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email]],
            "mobileNo": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("^(0|[1-9][0-9]*)$")]],
            "dob": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            "sex": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            "userName": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            "password": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(8)]],
            "points": this._formBuilder.array([
                this._formBuilder.group({
                    "totalPoints": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("^(0|[1-9][0-9]*)$")]]
                })
            ]),
            "store": this._formBuilder.array([
                this._formBuilder.group({
                    "id": [],
                    "storeName": [],
                    "contactName": [],
                    "email": [],
                    "address": [],
                    "contactNo": [],
                    "loyalty": [],
                    "networkGroup": []
                })
            ])
        });
    };
    AddCustomersComponent.prototype.readUrl = function (event) {
        var _this = this;
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        // this.customerForm.value = files[0];
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AddCustomersComponent.prototype.isFieldValid = function (field) {
        return !this.customerForm.get(field).valid && this.customerForm.get(field).touched;
    };
    AddCustomersComponent.prototype.isFieldSucess = function (field) {
        return this.customerForm.get(field).valid && this.customerForm.get(field).touched;
    };
    AddCustomersComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-success': this.isFieldSucess(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    AddCustomersComponent.prototype.uploadCustomerImage = function () {
        var _this = this;
        console.log("Triggered");
        if (this.file != undefined) {
            this._fileUploadService.uploadCustomerImage(this.file).map(function (response) {
            }).catch(function (error) {
                return _this.errorUpload = "Failed upload";
            });
            this.uploadButton = true;
        }
    };
    AddCustomersComponent.prototype.submitForm = function () {
        var _this = this;
        this._storeService.getStore(this.customerForm.value.store[0].id).subscribe(function (data) {
            _this.storeCustomer = data;
            _this.customerForm.value.store[0] = _this.storeCustomer;
            console.log(_this.customerForm);
            if (_this.customerForm.valid) {
                _this._customerService.createCustomers(_this.customerForm.value).subscribe(function (data) {
                    console.log(data);
                    _this.customerForm.reset();
                    $("#successModal").modal("show");
                }, function (error) {
                    _this.errorMessage = JSON.parse(error._body);
                    $("#failureModal").modal("show");
                });
            }
        });
    };
    AddCustomersComponent.prototype.success = function () {
        $("#successModal").modal("hide");
        this._router.navigate(['/home/customer/list_customer']);
    };
    AddCustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-customers',
            template: __webpack_require__("../../../../../src/app/components/customers/add-customers/add-customers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/customers/add-customers/add-customers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_service_customer_services_customer_service_service__["a" /* CustomerServiceService */], __WEBPACK_IMPORTED_MODULE_4__shared_service_store_service_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__shared_service_upload_file_upload_file_service__["a" /* UploadFileService */]])
    ], AddCustomersComponent);
    return AddCustomersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/customers/customer-register/customer-register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.store-form table.table-bordered td {\r\n    margin: 0;\r\n    padding: 0;\r\n    \r\n}\r\ndiv.store-form table.table-bordered td label{\r\n    margin: 0;\r\n    padding: 10px;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customers/customer-register/customer-register.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  3px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Cutomer Registration Requests</h3>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div style=\"clear:both; margin-bottom:10px;\"></div>\r\n\r\n      <div class=\"dataTables_wrapper form-inline\">\r\n\r\n        <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.N</th>\r\n              <th>Name</th>\r\n              <th>Address</th>\r\n              <th>Email</th>\r\n              <th>Mobile No</th>\r\n              <th>User Name</th>\r\n              <th>Sex</th>\r\n              <th>DOB</th>\r\n              <th>Options</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr *ngFor=\"let customers  of customerReg; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{customers.customerName}}</td>\r\n              <td>{{customers.currentAddress}}</td>\r\n              <td>{{customers.email}}</td>\r\n              <td>{{customers.mobileNo}}</td>\r\n              <td>{{customers.userName}}</td>\r\n              <td>{{customers.sex}}</td>\r\n              <td>{{customers.dob}}</td>\r\n              <td>\r\n                <a style=\"color:white\" class=\" btn btn-success btn-sm\" (click)=\"approveRequest(customers)\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">\r\n                  <i class=\"fa fa-check\"></i>&nbsp;Approve Request</a>\r\n                <a style=\"color:white\" class=\"btn-hasIcon btn btn-danger btn-sm\" (click)=\"deleteRequest(customers)\">\r\n                  <i class=\"fa fa-trash\"></i>&nbsp;Cancel Request</a>\r\n              </td>\r\n\r\n            </tr>\r\n\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- Delete modal -->\r\n      <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Do you want to delete?\r\n              </h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"contain\">\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"submit\" class=\"btn btn-success\" (click)=\"confirmDelete()\">Yes</button>\r\n                  <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">No</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- approve modal -->\r\n\r\n      <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h4 class=\"modal-title\" id=\"exampleModalLongTitle\">Approve Customers\r\n              </h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"contain\">\r\n\r\n                <form (submit)=\"acceptRequest()\">\r\n                  <div class=\"container\">\r\n                    <div class=\"store-form\">\r\n                      <span style=\"font-size:21px; margin-left:247px;\">Customer Details</span>\r\n                      <hr>\r\n                      <table width=\"100%\" class=\"table table-bordered datatable display\">\r\n                        <tr>\r\n                          <td>\r\n                            <label for=\"id\" class=\"table-head\">Customer Name</label>\r\n                          </td>\r\n                          <td>\r\n                            <!-- <label>{{customerRegistrationDetails.customerName}}</label> -->\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            <label for=\"groupName\" class=\"table-head\">Address</label>\r\n                          </td>\r\n                          <td>\r\n                            <label>{{customerRegistrationDetails.currentAddress}}</label>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            <label for=\"storeName\" class=\"table-head\">Email</label>\r\n                          </td>\r\n                          <td>\r\n                            <label>{{customerRegistrationDetails.email}}</label>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            <label for=\"totalPoints\" class=\"table-head\">Contact No</label>\r\n                          </td>\r\n                          <td>\r\n                            <label>{{customerRegistrationDetails.mobileNo}}</label>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            <label for=\"totalPoints\" class=\"table-head\">Date Of Birth</label>\r\n                          </td>\r\n                          <td>\r\n                            <label>{{customerRegistrationDetails.dob}}</label>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            <label for=\"totalPoints\" class=\"table-head\">User Name</label>\r\n                          </td>\r\n                          <td>\r\n                            <label>{{customerRegistrationDetails.userName}}</label>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>\r\n                            <label for=\"totalPoints\" class=\"table-head\">Sex</label>\r\n                          </td>\r\n                          <td>\r\n                            <label>{{customerRegistrationDetails.sex}}</label>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"container\"  [formGroup]=\"cusRegForm\">\r\n                      <div class=\"form-group\" formArrayName=\"store\">\r\n                        <label for=\"storeId\" style=\"font-weight:bold\">Store Name</label>\r\n                        <div *ngFor=\"let stored of getControls(cusRegForm, 'store'); let idx = index\" [formGroupName]=\"idx\">\r\n                          <select class=\"form-control\" id=\"storeId\" formControlName=\"id\">\r\n                            <option *ngFor=\"let store of stores\" [ngValue]=\"store.id\">{{store.storeName}}</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div formArrayName=\"points\">\r\n                        <div *ngFor=\"let point of getControls(cusRegForm, 'points');let totalPoints = index\" [formGroupName]=\"totalPoints\">\r\n                          <div class=\"form-group\">\r\n                            <!-- [ngClass]=\"displayFieldCss('points.value')\" -->\r\n                            <label for=\"point\">Points</label>\r\n                            <input type=\"text\" class=\"form-control\" value=\"5000\" placeholder=\"Point\" id=\"point\" formControlName=\"totalPoints\">\r\n                            <!-- <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('points.value')\" style=\"color:#a94442;\">\r\n                              </div> -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"modal-footer\">\r\n                        <input type=\"submit\" class=\"btn btn-success pull-right col-2\" value=\"Save\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n                </form>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/customers/customer-register/customer-register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_customer_registration_customer_registration_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-registration/customer-registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_customer_services_customer_service_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-services/customer-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerRegisterComponent = /** @class */ (function () {
    function CustomerRegisterComponent(_customerService, _storeService, _customerRegistration, _router, _formBuilder) {
        this._customerService = _customerService;
        this._storeService = _storeService;
        this._customerRegistration = _customerRegistration;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this.storeCustomerReg = {
            id: null,
            storeName: "",
            contactName: "",
            email: "",
            address: "",
            contactNo: 0,
            networkGroup: null,
            points: null,
            pointsSpend: null,
            loyalty: null,
            totalPoints: null
        };
        this.customerRegistrationDetails = {
            id: null,
            customerName: '',
            currentAddress: '',
            email: '',
            userName: '',
            password: '',
            mobileNo: null,
            store: null,
            points: {
                id: null,
                totalPoints: null,
            },
            dob: null,
            imagePath: null,
            sex: '',
        };
        this.stores = [];
        this.cusRegistration = [];
    }
    CustomerRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadDataTable();
        this.createCustomerForm();
        this._storeService.getStores().subscribe(function (data) {
            _this.stores = data;
        });
    };
    CustomerRegisterComponent.prototype.loadDataTable = function () {
        var _this = this;
        this._customerRegistration.getCustomerRegistration().subscribe(function (data) {
            _this.customerReg = data;
        });
    };
    CustomerRegisterComponent.prototype.approveRequest = function (customers) {
        this.customerRegistrationDetails = customers;
    };
    CustomerRegisterComponent.prototype.createCustomerForm = function () {
        this.cusRegForm = this._formBuilder.group({
            "customerName": [this.customerRegistrationDetails.customerName],
            "currentAddress": [this.customerRegistrationDetails.currentAddress],
            "email": [this.customerRegistrationDetails.email],
            "mobileNo": [this.customerRegistrationDetails.mobileNo],
            "dob": [''],
            "sex": [''],
            "userName": [''],
            "password": [''],
            "points": this._formBuilder.array([
                this._formBuilder.group({
                    "totalPoints": ['5000', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].pattern("^(0|[1-9][0-9]*)$")]]
                })
            ]),
            "store": this._formBuilder.array([
                this._formBuilder.group({
                    "id": [],
                    "storeName": [],
                    "contactName": [],
                    "email": [],
                    "address": [],
                    "contactNo": [],
                    "loyalty": [],
                    "networkGroup": []
                })
            ])
        });
    };
    CustomerRegisterComponent.prototype.getControls = function (frmGrp, key) {
        return frmGrp.controls[key].controls;
    };
    CustomerRegisterComponent.prototype.isFieldValid = function (field) {
        return !this.cusRegForm.get(field).valid && this.cusRegForm.get(field).touched;
    };
    CustomerRegisterComponent.prototype.isFieldSucess = function (field) {
        return this.cusRegForm.get(field).valid && this.cusRegForm.get(field).touched;
    };
    CustomerRegisterComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-success': this.isFieldSucess(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    CustomerRegisterComponent.prototype.deleteRequest = function (customers) {
        this.customerConfDelete = customers;
        $("#deleteModal").modal("show");
    };
    CustomerRegisterComponent.prototype.confirmDelete = function () {
        var _this = this;
        this._customerRegistration.deleteCusRegistration(this.customerConfDelete.id).subscribe(function (data) {
            _this.cusRegistration.splice(_this.cusRegistration.indexOf(_this.customerConfDelete), 1);
            _this._router.navigate(['home/customer_register']);
            _this.loadDataTable();
            $("#deleteModal").modal("hide");
        });
    };
    CustomerRegisterComponent.prototype.acceptRequest = function () {
        var _this = this;
        this.cusRegForm.value.id = null;
        this.cusRegForm.value.customerName = this.customerRegistrationDetails.customerName;
        this.cusRegForm.value.currentAddress = this.customerRegistrationDetails.currentAddress;
        this.cusRegForm.value.email = this.customerRegistrationDetails.email;
        this.cusRegForm.value.mobileNo = this.customerRegistrationDetails.mobileNo;
        this.cusRegForm.value.userName = this.customerRegistrationDetails.userName;
        this.cusRegForm.value.password = this.customerRegistrationDetails.password;
        this.cusRegForm.value.sex = this.customerRegistrationDetails.customerName;
        this.cusRegForm.value.dob = this.customerRegistrationDetails.dob;
        this._storeService.getStore(this.cusRegForm.value.store[0].id).subscribe(function (data) {
            _this.storeCustomerReg = data;
            _this.cusRegForm.value.store[0] = _this.storeCustomerReg;
            console.log(_this.cusRegForm);
            if (_this.cusRegForm.valid) {
                _this._customerService.createCustomers(_this.cusRegForm.value).subscribe(function (data) {
                    console.log(JSON.stringify(_this.cusRegForm.value));
                    _this._customerRegistration.deleteCusRegistration(_this.customerRegistrationDetails.id).subscribe(function (data) {
                        _this.cusRegistration.splice(_this.cusRegistration.indexOf(_this.customerConfDelete), 1);
                        _this._router.navigate(['home/customer_register']);
                        $("#deleteModal").modal("hide");
                    });
                    _this.cusRegForm.reset();
                    _this._router.navigate(['/home/customer_register']);
                    $(".bd-example-modal-lg").modal("hide");
                });
            }
        });
    };
    CustomerRegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-customer-register',
            template: __webpack_require__("../../../../../src/app/components/customers/customer-register/customer-register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/customers/customer-register/customer-register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_service_customer_services_customer_service_service__["a" /* CustomerServiceService */], __WEBPACK_IMPORTED_MODULE_4__shared_service_store_service_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_1__shared_service_customer_registration_customer_registration_service__["a" /* CustomerRegistrationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], CustomerRegisterComponent);
    return CustomerRegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/customers/customer-transaction/add-transaction/add-transaction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-check {\r\n    padding-left: 0rem;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;    \r\n}\r\nselect.ng-invalid.ng-touched{\r\n    border: 1px solid red;    \r\n}\r\n.help-block{\r\n    color:red;\r\n}\r\ndiv.store-form{\r\n    background-color:#f5f5f5;\r\n    border:#f5f5f5;\r\n    border-radius:10px;\r\n\r\n   -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n\r\n           box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n}\r\ndiv.form-holder{\r\n   \r\n    padding:15px;\r\n}\r\ndiv.store-form-holder{\r\n    padding:35px 38px 50px 44px\r\n}\r\n.control-label.required:after { \r\n    color: #d00;\r\n    content: \"*\";\r\n    position: absolute;\r\n    margin-left: 5px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customers/customer-transaction/add-transaction/add-transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  10px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Customer Transaction</h3>\r\n<div class=\"container\">\r\n  <div class=\"store-form\">\r\n    <div class=\"jumbotron\">\r\n      <div class=\"form-group\">\r\n        <label for=\"mobileNo\">Enter Mobile No</label>\r\n        <input class=\"form-control\" id=\"mobileNo\" ngModel name=\"mobileNo\" [(ngModel)]=\"customerValue.mobileNo\" pattern=\"[0-9]*\" required>\r\n        <span class=\"errorFormMessage\" >{{invalidMobile}}</span>\r\n      </div>\r\n      <hr>\r\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"checkMobileNo(customerValue.mobileNo)\">Verify</button>\r\n\r\n      <div class=\"modal fade\" id=\"addTransaction\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addTransaction\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <form #f=\"ngForm\" id=\"editForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Customer Detail</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"modal-body\">\r\n                <div class=\"container\">\r\n                  <table width=\"100%\">\r\n                    <tr>\r\n                      <td>\r\n                        <label for=\"id\" class=\"table-head\">Id</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{customerValue.id}}</label>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <label for=\"name\" class=\"table-head\">Name</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{customerValue.customerName}}</label>\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <label for=\"totalPoints\" class=\"table-head\">Total Points</label>\r\n                      </td>\r\n                      <td>\r\n                        <label>{{customerValue.totalPoints}}</label>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"addReceivedAmt()\">Add Received Amount</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Add Receive amount modal -->\r\n      <div class=\"modal fade\" id=\"addReceiveAmount\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"addReceiveAmount\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <form #f=\"ngForm\" id=\"editForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Add Amount</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"modal-body\">\r\n                <div class=\"container\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"receivedAmount\">Enter received amount</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"transactionAmount\" ngModel name=\"transactionAmount\" [(ngModel)]=\"customerTransaction.transactionAmount\"\r\n                      required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"storeId\">Store Name</label>\r\n                    <select class=\"form-control\" id=\"storeId\" ngModel name=\"id\" [(ngModel)]=\"customerTransaction.storeId\">\r\n                      <option *ngFor=\"let store of stores\" [ngValue]=\"store.id\">{{store.storeName}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"submit\" class=\"btn btn-success\" (click)=\"receiveAmount()\">Enter</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Insufficient Points modal -->\r\n      <div id=\"insufficientPoints\" class=\"modal fade\">\r\n          <div class=\"modal-dialog modal-error\">\r\n              <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                      <div class=\"icon-box\">\r\n                          <i class=\"fa fa-times\"></i>\r\n                      </div>\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                  </div>\r\n                  <div class=\"modal-body text-center\">\r\n                      <h4>Ooops!</h4>\r\n                      <h5>No Enough Points</h5>\r\n                      <button class=\"btn btn-success\" data-dismiss=\"modal\">Try Again</button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <!--Point Add Success Modal -->\r\n      <div id=\"pointAddSuccessModal\" class=\"modal fade\">\r\n          <div class=\"modal-dialog modal-success\">\r\n              <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                      <div class=\"icon-box\">\r\n                          <i class=\"fa fa-check\"></i>\r\n                      </div>\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                  </div>\r\n                  <div class=\"modal-body text-center\">\r\n                      <h4>Success!</h4>\r\n                      <h5>Point Added Successfully</h5>\r\n                      <button class=\"btn btn-success\" data-dismiss=\"modal\">Close</button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/customers/customer-transaction/add-transaction/add-transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_customer_services_customer_service_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_point_services_point_service_service__ = __webpack_require__("../../../../../src/app/shared-service/point-services/point-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTransactionComponent = /** @class */ (function () {
    function AddTransactionComponent(_customerService, _storeService, _pointService) {
        this._customerService = _customerService;
        this._storeService = _storeService;
        this._pointService = _pointService;
        this.stores = [];
        this.customerTransaction = {
            customerId: null,
            storeId: null,
            transactionAmount: null
        };
        this.customerValue = {
            id: null,
            customerName: '',
            currentAddress: '',
            email: '',
            userName: '',
            password: '',
            mobileNo: null,
            store: null,
            points: {
                id: null,
                totalPoints: null,
            },
            dob: null,
            imagePath: null,
            sex: '',
            totalPoints: null
        };
        this.invalidMobile = "";
    }
    AddTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storeService.getStores().subscribe(function (data) {
            _this.stores = data;
        });
    };
    AddTransactionComponent.prototype.checkMobileNo = function (mobileNo) {
        var _this = this;
        this._customerService.checkMobileNo(mobileNo).subscribe(function (data) {
            _this.customerValue = data;
            _this.customerTransaction.customerId = data.id;
            if (data === null) {
                console.error("Mobile No is Not Match");
            }
            else {
                console.log(data);
                $("#addTransaction").modal("show");
            }
            _this.invalidMobile = "";
        }, function (error) {
            _this.invalidMobile = "Customer Not Found";
        });
    };
    AddTransactionComponent.prototype.addReceivedAmt = function () {
        $("#addTransaction").modal("hide");
        $("#addReceiveAmount").modal("show");
    };
    AddTransactionComponent.prototype.receiveAmount = function () {
        console.log(this.customerTransaction.customerId);
        console.log(this.customerTransaction.storeId);
        console.log(this.customerTransaction.transactionAmount);
        this._pointService.customerBuyTransaction(this.customerTransaction).subscribe(function (data) {
            $("#addReceiveAmount").modal("hide");
            $("#pointAddSuccessModal").modal("show");
        }, function (error) {
            $("#addReceiveAmount").modal("hide");
            $("#insufficientPoints").modal("show");
        });
    };
    AddTransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-transaction',
            template: __webpack_require__("../../../../../src/app/components/customers/customer-transaction/add-transaction/add-transaction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/customers/customer-transaction/add-transaction/add-transaction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_customer_services_customer_service_service__["a" /* CustomerServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_store_service_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_point_services_point_service_service__["a" /* PointServiceService */]])
    ], AddTransactionComponent);
    return AddTransactionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/customers/customer-transaction/view-transaction/view-transaction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-check {\r\n    padding-left: 0rem;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;    \r\n}\r\nselect.ng-invalid.ng-touched{\r\n    border: 1px solid red;    \r\n}\r\n.help-block{\r\n    color:red;\r\n}\r\ndiv.store-form{\r\n    background-color:#f5f5f5;\r\n    border:#f5f5f5;\r\n    border-radius:10px;\r\n\r\n   -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n\r\n           box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n}\r\ndiv.form-holder{\r\n   \r\n    padding:15px;\r\n}\r\ndiv.store-form-holder{\r\n    padding:35px 38px 50px 44px\r\n}\r\n.control-label.required:after { \r\n    color: #d00;\r\n    content: \"*\";\r\n    position: absolute;\r\n    margin-left: 5px;\r\n  }\r\n.table-head{\r\n    font-weight: bold\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customers/customer-transaction/view-transaction/view-transaction.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  10px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Customer Transaction</h3>\r\n<div class=\"container\">\r\n  <div class=\"store-form\">\r\n    <div class=\"jumbotron\">\r\n      <div class=\"form-group\">\r\n        <label for=\"mobileNo\">Enter Mobile No</label>\r\n        <input type=\"mobileNo\" class=\"form-control\" id=\"mobileNo\" ngModel name=\"mobileNo\" [(ngModel)]=\"customerValue.mobileNo\" required>\r\n        <span class=\"errorFormMessage\">{{invalidMobile}}</span>\r\n      </div>\r\n      <hr>\r\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"checkMobileNo(customerValue.mobileNo)\">Get Transaction Detail</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"store-form\" *ngIf=\"showTable==true\">\r\n    <div class=\"jumbotron\">\r\n      <h3>Transaction Details</h3>\r\n      <hr>\r\n      <table width=\"50%\" class=\"table table-bordered datatable display\">\r\n        <tr>\r\n          <td>\r\n            <label for=\"id\" class=\"table-head\">Id</label>\r\n          </td>\r\n          <td>\r\n            <label>{{customerValue.id}}</label>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <label for=\"name\" class=\"table-head\">Name</label>\r\n          </td>\r\n          <td>\r\n            <label>{{customerValue.customerName}}</label>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <label for=\"totalPoints\" class=\"table-head\">Total Points</label>\r\n          </td>\r\n          <td>\r\n            <label>{{customerValue.totalPoints}}</label>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n\r\n      <div class=\"dataTables_wrapper form-inline\">\r\n\r\n        <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.N</th>\r\n              <th>Description</th>\r\n              <th>Transaction Date</th>\r\n              <th>Received Point</th>\r\n              <th>Purchase Amount</th>\r\n              <th>Loyalty Paid</th>\r\n              <th>Total Points</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let transaction  of customerTransaction; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{transaction.description}}</td>\r\n              <td>{{transaction.transactionDate}}</td>\r\n              <td>{{transaction.receivePoints}}</td>\r\n              <td>{{transaction.paidAmount}}</td>\r\n              <td>{{transaction.transferPoints}}</td>\r\n              <td>{{transaction.totalPoints}}</td>\r\n              \r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/customers/customer-transaction/view-transaction/view-transaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_customer_services_customer_service_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_point_services_point_service_service__ = __webpack_require__("../../../../../src/app/shared-service/point-services/point-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewTransactionComponent = /** @class */ (function () {
    function ViewTransactionComponent(_customerService, _storeService, _pointService) {
        this._customerService = _customerService;
        this._storeService = _storeService;
        this._pointService = _pointService;
        this.customer = [];
        this.customerTransaction = [];
        this.customerValue = {
            id: null,
            customerName: '',
            currentAddress: '',
            email: '',
            userName: '',
            password: '',
            mobileNo: null,
            store: null,
            points: {
                id: null,
                totalPoints: null,
            },
            dob: null,
            imagePath: null,
            sex: '',
            totalPoints: null
        };
        this.showTable = false;
        this.invalidMobile = "";
    }
    ViewTransactionComponent.prototype.ngOnInit = function () {
    };
    ViewTransactionComponent.prototype.checkMobileNo = function (mobileNo) {
        var _this = this;
        this._customerService.checkMobileNo(mobileNo).subscribe(function (data) {
            _this.showTable = true;
            _this.customerValue = data;
            _this._pointService.getCustomerTransaction(_this.customerValue.id).subscribe(function (data) {
                _this.customerTransaction = data;
                setTimeout(function () {
                    $(document).ready(function () {
                        $('#pagination').DataTable({
                            dom: 'Bfrtip', buttons: [
                                'copy', 'csv', 'excel', 'pdf', 'print'
                            ],
                            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
                        });
                    });
                }, 250);
                // setTimeout(function () {
                //   $(function () {
                //     $("#pagination").DataTable();
                //   });
                // }, 3000);
                console.log(_this.customerTransaction);
            });
            if (data === null) {
                console.error("Mobile No is Not Match");
            }
            else {
                console.log(data);
            }
            _this.invalidMobile = "";
        }, function (error) {
            _this.errorMessage = JSON.parse(error._body);
            console.log(_this.errorMessage.message);
            _this.invalidMobile = "Customer Not Found";
            _this.showTable = false;
        });
    };
    ViewTransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-transaction',
            template: __webpack_require__("../../../../../src/app/components/customers/customer-transaction/view-transaction/view-transaction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/customers/customer-transaction/view-transaction/view-transaction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_customer_services_customer_service_service__["a" /* CustomerServiceService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_store_service_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_point_services_point_service_service__["a" /* PointServiceService */]])
    ], ViewTransactionComponent);
    return ViewTransactionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/customers/list-customers/list-customers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn.btn-hasIcon .fa {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: -0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    color: #fff;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 35px;\r\n    background: #C81A2B;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.btn.btn-hasIcon .fa::before {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.btn.btn-info.btn-hasIcon .fa {\r\n    background: #087384;\r\n}\r\n\r\n.btn.btn-primary.btn-hasIcon .fa {\r\n    background: #095CB6;\r\n}\r\n\r\n.btn-hasIcon {\r\n    position: relative;\r\n    padding-left: 40px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    border: 0;\r\n    color: #fff !important;\r\n    margin: 3px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/customers/list-customers/list-customers.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  3px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Customer List</h3>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <button class=\"btn-hasIcon btn btn-primary pull-right add-store\" (click)=\"newCustomer()\">\r\n        <i class=\"fa fa-plus\"></i>&nbsp;\r\n        <span>Add Customer</span>\r\n      </button>\r\n      <div style=\"clear:both; margin-bottom:10px;\"></div>\r\n\r\n      <div class=\"dataTables_wrapper form-inline\">\r\n\r\n        <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.N</th>\r\n              <th>Store Name</th>\r\n              <th>Name</th>\r\n              <th>Address</th>\r\n              <th>Email</th>\r\n              <th>Phone No</th>\r\n              <th>User Name</th>\r\n              <th>Points</th>\r\n              <th>Sex</th>\r\n              <th>DOB</th>\r\n              <th>Options</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr *ngFor=\"let customers  of customer; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>\r\n                <span *ngFor=\"let store of customers.store\">\r\n                  {{store.storeName}}\r\n                  <br>\r\n                  <br>\r\n                  <!--should be customer.store.storname  -->\r\n                </span>\r\n              </td>\r\n              <td>{{customers.customerName}}</td>\r\n              <td>{{customers.currentAddress}}</td>\r\n              <td>{{customers.email}}</td>\r\n              <td>{{customers.mobileNo}}</td>\r\n              <td>{{customers.userName}}</td>\r\n              <td>\r\n                {{customers.totalPoints}}\r\n              </td>\r\n              <td>{{customers.sex}}</td>\r\n              <td>{{customers.dob}}</td>\r\n              <td>\r\n                <a class=\"btn-hasIcon btn btn-info btn-sm\" (click)=\"editCustomer(customers)\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\r\n                  <!-- [routerLink]=\"['/store/store_list',store.id]\" -->\r\n                  <i class=\"fa fa-pencil\"></i>&nbsp;Edit </a>\r\n                <a class=\"btn-hasIcon btn btn-danger btn-sm\" (click)=\"deleteCustomer(customers)\" >\r\n                  <!-- data-toggle=\"modal\" data-target=\".bd-example-modal-sm\" -->\r\n                  <i class=\"fa fa-trash-o\"></i>&nbsp;Delete </a>\r\n              </td>\r\n\r\n            </tr>\r\n\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- Delete modal -->\r\n      <div id=\"deleteModal\" class=\"modal fade\">\r\n          <div class=\"modal-dialog modal-delete\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <div class=\"icon-box\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </div>\t\t\t\t\r\n                <h4 class=\"modal-title\">Are you sure?</h4>\t\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <p>Do you really want to delete this customer? This process cannot be undone.</p>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirmDelete()\">Delete</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>  \r\n\r\n      <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Edit Customer\r\n              </h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"contain\">\r\n\r\n                <form (submit)=\"updateCustomerForm()\">\r\n\r\n                  <div class=\"form-group\">\r\n                    <input type=\"hidden\" class=\"form-control\" id=\"id\" ngModel name=\"id\" [(ngModel)]=\"customerValue.id\">\r\n                  </div>\r\n\r\n\r\n\r\n                  <div [formGroup]=\"customerForm\">\r\n                    <div formArrayName=\"store\">\r\n                      <div *ngFor=\"let stored of getControls(customerForm, 'store');let i = index\" [formGroupName]=\"i\">\r\n                        <div class=\"form-group\">\r\n                          <label for=\"groupname\">Store Name</label>\r\n                          <select class=\"form-control\" id=\"groupname\" formControlName=\"id\">\r\n                            <option *ngFor=\"let store of stores\" [ngValue]=\"store.id\">{{store.storeName}}</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- \r\n                  <div class=\"form-group\" formArrayName=\"store\">\r\n                    <label for=\"storeId\">Store Name</label>\r\n                    <div *ngFor=\"let stored of customerFrom.controls['store'].controls; let idx = index\" [formGroupName]=\"idx\">\r\n                      <select class=\"form-control\" id=\"storeId\" formControlName=\"id\">\r\n                        <option *ngFor=\"let store of stores\" [ngValue]=\"store.id\">{{store.storeName}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div> -->\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"customerName\">Customer Name</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Customer Name\" id=\"customerName\" ngModel name=\"customerName\" [(ngModel)]=\"customerValue.customerName\">\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"address\">Address</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Customer address\" id=\"address\" ngModel name=\"currentAddress\" [(ngModel)]=\"customerValue.currentAddress\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" id=\"email\" ngModel name=\"email\" [(ngModel)]=\"customerValue.email\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"contactNo\">Contact No</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" id=\"contactNo\" ngModel name=\"mobileNo\" [(ngModel)]=\"customerValue.mobileNo\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"user\">User Name</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" id=\"user\" ngModel name=\"userName\" [(ngModel)]=\"customerValue.userName\">\r\n                  </div>\r\n                  <!-- \r\n                  <div class=\"form-group\">\r\n                    <label for=\"point\">Points</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Point\" id=\"point\" ngModel name=\"value\" [(ngModel)]=\"customerValue.points.value\">\r\n                  </div> -->\r\n\r\n                  <div [formGroup]=\"customerForm\">\r\n                    <div formArrayName=\"points\">\r\n                      <div *ngFor=\"let point of getControls(customerForm, 'points');let totalPoints = index\" [formGroupName]=\"totalPoints\">\r\n                        <div class=\"form-group\">\r\n                          <!-- [ngClass]=\"displayFieldCss('points.value')\" -->\r\n                          <label for=\"point\">Points</label>\r\n                          <input type=\"number\" class=\"form-control\" placeholder=\"Point\" id=\"point\" formControlName=\"totalPoints\">\r\n                          <!-- <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('points.value')\" style=\"color:#a94442;\">\r\n                          </div> -->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"dob\">DOB</label>\r\n                    <input type=\"date\" class=\"form-control\" placeholder=\"Date of Birth\" id=\"dob\" ngModel name=\"dob\" [(ngModel)]=\"customerValue.dob\">\r\n                  </div>\r\n\r\n                  <div>\r\n                    <label for=\"male\">Sex</label>\r\n                    <br>\r\n                    <div class=\"form-check form-check-inline\">\r\n                      <input class=\"form-check-input\" type=\"radio\" id=\"male\" value=\"Male\" checked ngModel name=\"sex\" [(ngModel)]=\"customerValue.sex\">\r\n                      <label class=\"form-check-label\" for=\"male\">\r\n                        Male\r\n                      </label>\r\n                      <input class=\"form-check-input\" type=\"radio\" id=\"female\" value=\"Female\" ngModel name=\"sex\" [(ngModel)]=\"customerValue.sex\">\r\n                      <label class=\"form-check-label\" for=\"female\">\r\n                        Female\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                  <br>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"photo\">Customer Image</label>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Image Path\" id=\"photo\" ngModel name=\"imagePath\" [(ngModel)]=\"customerValue.imagePath\">\r\n                  </div>\r\n\r\n\r\n                  <div class=\"modal-footer\">\r\n                    <input type=\"submit\" class=\"btn btn-success pull-right col-2\" value=\"Update\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                  </div>\r\n\r\n                </form>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/customers/list-customers/list-customers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListCustomersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_customer_services_customer_service_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-services/customer-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListCustomersComponent = /** @class */ (function () {
    function ListCustomersComponent(_storeService, _customerService, _router, _formBuilder) {
        this._storeService = _storeService;
        this._customerService = _customerService;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this.customer = [];
        this.customerValue = {
            id: null,
            customerName: '',
            currentAddress: '',
            email: '',
            userName: '',
            password: '',
            mobileNo: null,
            store: null,
            points: {
                id: null,
                totalPoints: null
            },
            dob: null,
            imagePath: null,
            sex: '',
            totalPoints: null
        };
        this.stores = [];
    }
    //for .controls error on npm build
    ListCustomersComponent.prototype.getControls = function (frmGrp, key) {
        return frmGrp.controls[key].controls;
    };
    ListCustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storeService.getStores().subscribe(function (data) {
            _this.stores = data;
        });
        this._customerService.getCustomers().subscribe(function (data) {
            _this.customer = data;
            console.log(_this.customer);
        });
        console.log(this.customer);
        this.updateForm();
        setTimeout(function () {
            $(function () {
                $("#pagination").DataTable();
            });
        }, 3000);
    };
    ListCustomersComponent.prototype.updateForm = function () {
        this.customerForm = this._formBuilder.group({
            "customerName": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(4)]],
            "currentAddress": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            "email": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].email]],
            "mobileNo": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("^(0|[1-9][0-9]*)$")]],
            "dob": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            "sex": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            "imagePath": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            "userName": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required],
            "password": ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].minLength(8)]],
            "points": this._formBuilder.array([
                this._formBuilder.group({
                    "totalPoints": ['5000', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("^(0|[1-9][0-9]*)$")]]
                })
            ]),
            "store": this._formBuilder.array([
                this._formBuilder.group({
                    "id": [],
                    "storeName": [],
                    "contactName": [],
                    "email": [],
                    "address": [],
                    "contactNo": [],
                    "loyalty": [],
                    "networkGroup": []
                })
            ])
        });
    };
    ListCustomersComponent.prototype.newCustomer = function () {
        this._router.navigate(['/home/customer/add_customer']);
    };
    ListCustomersComponent.prototype.deleteCustomer = function (customer) {
        this.customerForDelete = customer;
        $("#deleteModal").modal("show");
    };
    ListCustomersComponent.prototype.confirmDelete = function () {
        var _this = this;
        this._customerService.deleteCustomers(this.customerForDelete.id).subscribe(function (data) {
            console.log(_this.customerForDelete.id);
            _this.customer.splice(_this.customer.indexOf(_this.customerForDelete), 1);
        }, function (error) {
            console.log(error);
        });
        $("#deleteModal").modal("hide");
    };
    ListCustomersComponent.prototype.editCustomer = function (customerValue) {
        this.customerForm.reset();
        this._customerService.setter(customerValue);
        this.customerValue = this._customerService.getter();
    };
    ListCustomersComponent.prototype.updateCustomerForm = function () {
        var _this = this;
        console.log(JSON.stringify(this.customerForm.value.store[0].id));
        // if()
        this._storeService.getStore(this.customerForm.value.store[0].id).subscribe(function (data) {
            _this.customerForm.value.id = _this.customerValue.id;
            _this.customerForm.value.customerName = _this.customerValue.customerName;
            _this.customerForm.value.currentAddress = _this.customerValue.currentAddress;
            _this.customerForm.value.email = _this.customerValue.email;
            _this.customerForm.value.mobileNo = _this.customerValue.mobileNo;
            _this.customerForm.value.dob = _this.customerValue.dob;
            _this.customerForm.value.userName = _this.customerValue.userName;
            _this.customerForm.value.password = _this.customerValue.password;
            _this.customerForm.value.sex = _this.customerValue.sex;
            _this.customerForm.value.imagePath = _this.customerValue.imagePath;
            _this.customerForm.value.store[0] = data;
            console.log(_this.customerForm.value);
            _this.customerValue.points[0].id = null;
            console.log(JSON.stringify(_this.customerForm.value));
            console.log(_this.customerForm.value);
            _this._customerService.updateCustomers(_this.customerForm.value).subscribe(function (data) {
                _this._router.navigate(['/home/customer/list_customer']);
            });
        });
        $("#exampleModalCenter").modal("hide");
    };
    ListCustomersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-customers',
            template: __webpack_require__("../../../../../src/app/components/customers/list-customers/list-customers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/customers/list-customers/list-customers.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_service_store_service_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_4__shared_service_customer_services_customer_service_service__["a" /* CustomerServiceService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], ListCustomersComponent);
    return ListCustomersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- Content Header (Page header) -->\r\n  <section class=\"content-header\">\r\n    <h1>\r\n      Dashboard\r\n    </h1>\r\n  </section>\r\n\r\n  <!-- Main content -->\r\n  <section class=\"content\">\r\n    <!-- Small boxes (Stat box) -->\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-aqua\">\r\n          <div class=\"inner\">\r\n            <h4>Number of Groups</h4>\r\n            \r\n            <h3>{{no_of_groups}}</h3>\r\n\r\n            \r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-bag\"></i>\r\n          </div>\r\n          <a (click)=\"groupList()\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-green\">\r\n          <div class=\"inner\">\r\n            <h4>No of Stores</h4>\r\n            <h3>{{no_of_stores}}</h3>\r\n\r\n            \r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-stats-bars\"></i>\r\n          </div>\r\n          <a (click)=\"storeList()\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <div class=\"col-lg-3 col-xs-6\">\r\n        <!-- small box -->\r\n        <div class=\"small-box bg-yellow\">\r\n          <div class=\"inner\">\r\n              <h4>No of Customers</h4>\r\n            \r\n              <h3>{{no_of_customers}}</h3>\r\n          \r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-person-add\"></i>\r\n          </div>\r\n          <a (click)=\"customerList()\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div>\r\n      <!-- ./col -->\r\n      <!-- <div class=\"col-lg-3 col-xs-6\">\r\n        \r\n        <div class=\"small-box bg-red\">\r\n          <div class=\"inner\">\r\n            <h3>65</h3>\r\n\r\n            <p>Unique Visitors</p>\r\n          </div>\r\n          <div class=\"icon\">\r\n            <i class=\"ion ion-pie-graph\"></i>\r\n          </div>\r\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\r\n        </div>\r\n      </div> -->\r\n      <!-- ./col -->\r\n    </div>\r\n    <!-- /.row -->\r\n    <!-- Main row -->\r\n    \r\n    <!-- /.row (main row) -->\r\n\r\n  </section>\r\n  <!-- /.content -->"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_group_service_network_group_service__ = __webpack_require__("../../../../../src/app/shared-service/group-service/network-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_customer_services_customer_service_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_groupService, _customerService, _storeService, _router) {
        this._groupService = _groupService;
        this._customerService = _customerService;
        this._storeService = _storeService;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._groupService.getGroupNames().subscribe(function (groupNames) {
            _this.no_of_groups = groupNames.length;
        });
        this._customerService.getCustomers().subscribe(function (customer) {
            _this.no_of_customers = customer.length;
        });
        this._storeService.getStores().subscribe(function (stores) {
            _this.no_of_stores = stores.length;
        });
    };
    DashboardComponent.prototype.groupList = function () {
        this._router.navigate(['/home/group/group_list']);
    };
    DashboardComponent.prototype.storeList = function () {
        this._router.navigate(['/home/store/store_list']);
    };
    DashboardComponent.prototype.customerList = function () {
        this._router.navigate(['/home/customer/list_customer']);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_group_service_network_group_service__["a" /* NetworkGroupService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_customer_services_customer_service_service__["a" /* CustomerServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_store_service_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.dropdown-toggle{\r\n    color: white !important;\r\n}\r\n\r\n.dropdown-menu.show {\r\n    left: auto !important;\r\n    right: 0 !important;\r\n}\r\n\r\n.content-wrapper {\r\n    min-height: calc(100vh - 105px) !important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"hold-transition skin-blue sidebar-mini\">\r\n  <div class=\"wrapper\">\r\n\r\n    <!-- Main Header -->\r\n    <header class=\"main-header\">\r\n\r\n      <!-- Logo -->\r\n      <a href=\"index2.html\" class=\"logo\">\r\n        <!-- mini logo for sidebar mini 50x50 pixels -->\r\n        <span class=\"logo-mini\">\r\n          <b>A</b>\r\n        </span>\r\n        <!-- logo for regular state and mobile devices -->\r\n        <span class=\"logo-lg\">\r\n          <b>Admin Panel</b>\r\n        </span>\r\n      </a>\r\n\r\n      <!-- Header Navbar -->\r\n      <nav class=\"navbar navbar-static-top\" role=\"navigation\">\r\n        <!-- Sidebar toggle button-->\r\n        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n        </a>\r\n        <!-- Navbar Right Menu -->\r\n        <!-- User Account: style can be found in dropdown.less -->\r\n        <li class=\"dropdown user user-menu\" style=\"list-style-type: none\">\r\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            <!-- <img src=\"../assets/img/admin_image.jpg\" class=\"user-image\" alt=\"User Image\"> -->\r\n            <span class=\"hidden-xs\">{{username}}</span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <!-- Menu Footer-->\r\n            <li class=\"user-footer\">\r\n              <a href=\"\">\r\n                <button class=\"dropdown-item\" type=\"button\">SignOut</button>\r\n              </a>\r\n            </li>\r\n\r\n          </ul>\r\n        </li>\r\n      </nav>\r\n    </header>\r\n    <!-- Left side column. contains the logo and sidebar -->\r\n    <aside class=\"main-sidebar\">\r\n\r\n      <!-- sidebar: style can be found in sidebar.less -->\r\n      <section class=\"sidebar\">\r\n\r\n        <!-- Sidebar user panel (optional) -->\r\n        <div class=\"user-panel\">\r\n          <div class=\"pull-left image\">\r\n            <img src=\"../assets/img/admin_image.jpg\" class=\"img-circle\" alt=\"User Image\">\r\n          </div>\r\n          <div class=\"pull-left info\">\r\n            <p>Admin</p>\r\n            <!-- Status -->\r\n            <a href=\"#\">\r\n              <i class=\"fa fa-circle text-success\"></i> Online</a>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Sidebar Menu -->\r\n        <ul class=\"sidebar-menu\" data-widget=\"tree\">\r\n          <li class=\"header\">Dashbord</li>\r\n          <!-- Optionally, you can add icons to the links -->\r\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a routerLink=\"/home/dashboard\">\r\n              <i class=\"fa fa-link\"></i>\r\n              <span>Dashbord</span>\r\n            </a>\r\n          </li>\r\n          <!-- Group menu -->\r\n          <li class=\"treeview\" routerLinkActive=\"active\" *ngIf=\"roles.name =='ROLE_SUPER_ADMIN' || roles.name =='ROLE_ADMIN'\">\r\n            <a style=\"cursor: pointer\">\r\n              <i class=\"fa fa-link\"></i>\r\n              <span>Group</span>\r\n              <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n            </a>\r\n            <ul class=\"treeview-menu\">\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/group/group_add' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-plus\"></i>\r\n                  <span>Add Group</span>\r\n                </a>\r\n              </li>\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/group/group_list' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-copy\"></i>\r\n                  <span>View Groups</span>\r\n                </a>\r\n              </li>\r\n              \r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/group/transaction_details' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-copy\"></i>\r\n                  <span>Group Transaction </span>\r\n                </a>\r\n              </li>\r\n\r\n            </ul>\r\n          </li>\r\n\r\n          <!-- Store menu -->\r\n          <li class=\"treeview\" routerLinkActive=\"active\" *ngIf=\"roles.name =='ROLE_SUPER_ADMIN' || roles?.name =='ROLE_ADMIN'\">\r\n            <a style=\"cursor: pointer\">\r\n              <i class=\"fa fa-link\"></i>\r\n              <span>Store</span>\r\n              <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n            </a>\r\n            <ul class=\"treeview-menu\">\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/store/store_add' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-plus\"></i>\r\n                  <span>Add Store</span>\r\n                </a>\r\n              </li>\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/store/store_list' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-copy\"></i>\r\n                  <span>View Store</span>\r\n                </a>\r\n              </li>\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/store/top_spender' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-copy\"></i>\r\n                  <span>Top Spender</span>\r\n                </a>\r\n              </li>\r\n\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/store/transaction_details' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-copy\"></i>\r\n                  <span>Store Transaction</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n\r\n          <!-- CustomerMenu -->\r\n          <li class=\"treeview\" routerLinkActive=\"active\" *ngIf=\"roles?.name =='ROLE_SUPER_ADMIN' || roles?.name =='ROLE_ADMIN' || roles?.name =='ROLE_STORE'\">\r\n            <a style=\"cursor: pointer\">\r\n              <i class=\"fa fa-link\"></i>\r\n              <span>Customer</span>\r\n              <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n            </a>\r\n            <ul class=\"treeview-menu\">\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/customer/add_customer' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-plus\"></i>\r\n                  <span>Add Customer</span>\r\n                </a>\r\n              </li>\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/customer/list_customer' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-copy\"></i>\r\n                  <span>View Customers</span>\r\n                </a>\r\n              </li>\r\n\r\n            </ul>\r\n          </li>\r\n\r\n          <!-- Customer Registration Control Menu -->\r\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"roles?.name =='ROLE_SUPER_ADMIN' || roles?.name =='ROLE_ADMIN' || roles?.name =='ROLE_STORE'\">\r\n            <a routerLink=\"/home/customer_register\">\r\n              <i class=\"fa fa-link\"></i>\r\n              <span>Customer Register</span>\r\n            </a>\r\n          </li>\r\n\r\n          <!-- Customer transcations -->\r\n          <li class=\"treeview\" routerLinkActive=\"active\">\r\n            <a style=\"cursor: pointer\">\r\n              <i class=\"fa fa-link\"></i>\r\n              <span>Customer Transaction</span>\r\n              <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n            </a>\r\n            <ul class=\"treeview-menu\">\r\n              <li routerLinkActive=\"active\" *ngIf=\"roles?.name =='ROLE_SUPER_ADMIN' || roles?.name =='ROLE_ADMIN' || roles?.name =='ROLE_STORE'\">\r\n                <a routerLink='/home/customer_transaction/add_transaction' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-plus\"></i>\r\n                  <span>Add Transaction</span>\r\n                </a>\r\n              </li>\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/customer_transaction/view_transactions' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-copy\"></i>\r\n                  <span>View Transaction</span>\r\n                </a>\r\n              </li>\r\n\r\n            </ul>\r\n          </li>\r\n\r\n          <!-- Add Point Menu -->\r\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n            <a routerLink=\"/home/pointTransaction\">\r\n              <i class=\"fa fa-link\"></i>\r\n              <span>Point Transaction</span>\r\n            </a>\r\n          </li>\r\n\r\n\r\n          <!-- Change Loyalty Menu -->\r\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\" *ngIf=\"roles?.name =='ROLE_SUPER_ADMIN' || roles?.name =='ROLE_ADMIN' || roles?.name =='ROLE_STORE'\">\r\n            <a routerLink=\"/home/loyalty\">\r\n              <i class=\"fa fa-link\"></i>\r\n              <span>Loyalty</span>\r\n            </a>\r\n          </li>\r\n\r\n          <!-- test Menu -->\r\n          <!-- <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n              <a routerLink=\"/test\" ><i class=\"fa fa-link\"></i> <span>Test</span></a>\r\n            </li> -->\r\n\r\n          <!-- Advertisement menu -->\r\n          <li class=\"treeview\" routerLinkActive=\"active\" *ngIf=\"roles?.name =='ROLE_SUPER_ADMIN' || roles?.name =='ROLE_ADMIN' \">\r\n            <a style=\"cursor: pointer\">\r\n              <i class=\"fa fa-link\"></i>\r\n              <span>Advertisment</span>\r\n              <span class=\"pull-right-container\">\r\n                <i class=\"fa fa-angle-left pull-right\"></i>\r\n              </span>\r\n            </a>\r\n            <ul class=\"treeview-menu\">\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/add-advertisement' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-plus\"></i>\r\n                  <span>Add Advertisement</span>\r\n                </a>\r\n              </li>\r\n              <li routerLinkActive=\"active\">\r\n                <a routerLink='/home/list-advertisement' style=\"cursor: pointer\">\r\n                  <i class=\"fa fa-copy\"></i>\r\n                  <span>View Advertisement</span>\r\n                </a>\r\n              </li>\r\n\r\n            </ul>\r\n          </li>\r\n\r\n        </ul>\r\n        <!-- /.sidebar-menu -->\r\n      </section>\r\n      <!-- /.sidebar -->\r\n    </aside>\r\n\r\n    <!-- Content Wrapper. Contains page content -->\r\n    <div class=\"content-wrapper\">\r\n      <!-- Content Header (Page header) -->\r\n\r\n\r\n      <!-- Main content -->\r\n      <section class=\"content container-fluid\">\r\n        <router-outlet></router-outlet>\r\n      </section>\r\n      <!-- /.content -->\r\n    </div>\r\n    <!-- /.content-wrapper -->\r\n\r\n    <!-- Main Footer -->\r\n    <footer class=\"main-footer\">\r\n      <!-- To the right -->\r\n      <div class=\"pull-right hidden-xs\">\r\n        <!-- Anything you want -->\r\n      </div>\r\n      <!-- Default to the left -->\r\n      <div style=\"text-align: center\">\r\n        <strong>Copyright &copy; 2018\r\n          <a href=\"http://itbridgenepal.com/\" target=\"_blank\">ITBridge Nepal</a>.</strong> All rights reserved.\r\n      </div>\r\n\r\n    </footer>\r\n\r\n    <!-- Control Sidebar -->\r\n    <aside class=\"control-sidebar control-sidebar-dark\">\r\n      <!-- Create the tabs -->\r\n      <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\r\n        <li>\r\n          <a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\">\r\n            <i class=\"fa fa-home\"></i>\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\">\r\n            <i class=\"fa fa-gears\"></i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <!-- Tab panes -->\r\n      <div class=\"tab-content\">\r\n        <!-- Home tab content -->\r\n        <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\r\n          <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\r\n          <ul class=\"control-sidebar-menu\">\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\r\n\r\n                <div class=\"menu-info\">\r\n                  <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\r\n\r\n                  <p>Will be 23 on April 24th</p>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <i class=\"menu-icon fa fa-user bg-yellow\"></i>\r\n\r\n                <div class=\"menu-info\">\r\n                  <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\r\n\r\n                  <p>New phone +1(800)555-1234</p>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\r\n\r\n                <div class=\"menu-info\">\r\n                  <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\r\n\r\n                  <p>nora@example.com</p>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\r\n\r\n                <div class=\"menu-info\">\r\n                  <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\r\n\r\n                  <p>Execution time 5 seconds</p>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <!-- /.control-sidebar-menu -->\r\n\r\n          <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\r\n          <ul class=\"control-sidebar-menu\">\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <h4 class=\"control-sidebar-subheading\">\r\n                  Custom Template Design\r\n                  <span class=\"label label-danger pull-right\">70%</span>\r\n                </h4>\r\n\r\n                <div class=\"progress progress-xxs\">\r\n                  <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <h4 class=\"control-sidebar-subheading\">\r\n                  Update Resume\r\n                  <span class=\"label label-success pull-right\">95%</span>\r\n                </h4>\r\n\r\n                <div class=\"progress progress-xxs\">\r\n                  <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <h4 class=\"control-sidebar-subheading\">\r\n                  Laravel Integration\r\n                  <span class=\"label label-warning pull-right\">50%</span>\r\n                </h4>\r\n\r\n                <div class=\"progress progress-xxs\">\r\n                  <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\r\n                </div>\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"javascript:void(0)\">\r\n                <h4 class=\"control-sidebar-subheading\">\r\n                  Back End Framework\r\n                  <span class=\"label label-primary pull-right\">68%</span>\r\n                </h4>\r\n\r\n                <div class=\"progress progress-xxs\">\r\n                  <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\r\n                </div>\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <!-- /.control-sidebar-menu -->\r\n\r\n        </div>\r\n        <!-- /.tab-pane -->\r\n        <!-- Stats tab content -->\r\n        <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\r\n        <!-- /.tab-pane -->\r\n        <!-- Settings tab content -->\r\n        <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\r\n          <form method=\"post\">\r\n            <h3 class=\"control-sidebar-heading\">General Settings</h3>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-sidebar-subheading\">\r\n                Report panel usage\r\n                <input type=\"checkbox\" class=\"pull-right\" checked>\r\n              </label>\r\n\r\n              <p>\r\n                Some information about this general settings option\r\n              </p>\r\n            </div>\r\n            <!-- /.form-group -->\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-sidebar-subheading\">\r\n                Allow mail redirect\r\n                <input type=\"checkbox\" class=\"pull-right\" checked>\r\n              </label>\r\n\r\n              <p>\r\n                Other sets of options are available\r\n              </p>\r\n            </div>\r\n            <!-- /.form-group -->\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-sidebar-subheading\">\r\n                Expose author name in posts\r\n                <input type=\"checkbox\" class=\"pull-right\" checked>\r\n              </label>\r\n\r\n              <p>\r\n                Allow the user to show his name in blog posts\r\n              </p>\r\n            </div>\r\n            <!-- /.form-group -->\r\n\r\n            <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-sidebar-subheading\">\r\n                Show me as online\r\n                <input type=\"checkbox\" class=\"pull-right\" checked>\r\n              </label>\r\n            </div>\r\n            <!-- /.form-group -->\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-sidebar-subheading\">\r\n                Turn off notifications\r\n                <input type=\"checkbox\" class=\"pull-right\">\r\n              </label>\r\n            </div>\r\n            <!-- /.form-group -->\r\n\r\n            <div class=\"form-group\">\r\n              <label class=\"control-sidebar-subheading\">\r\n                Delete chat history\r\n                <a href=\"javascript:void(0)\" class=\"text-red pull-right\">\r\n                  <i class=\"fa fa-trash-o\"></i>\r\n                </a>\r\n              </label>\r\n            </div>\r\n            <!-- /.form-group -->\r\n          </form>\r\n        </div>\r\n        <!-- /.tab-pane -->\r\n      </div>\r\n    </aside>\r\n    <!-- /.control-sidebar -->\r\n    <!-- Add the sidebar's background. This div must be placed\r\n    immediately after the control sidebar -->\r\n    <div class=\"control-sidebar-bg\"></div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared-service/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_user_user_service__ = __webpack_require__("../../../../../src/app/shared-service/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationService, userService) {
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.roles = {
            id: null,
            name: ""
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            var trees = $('[data-widget="tree"]');
            trees.tree();
        });
        this.username = this.authenticationService.getCurrentUser();
        this.getRole(this.username);
    };
    HomeComponent.prototype.getRole = function (username) {
        var _this = this;
        this.userService.getRole(username).subscribe(function (role) {
            _this.roles = role;
            console.log(_this.roles);
            console.log("*************************");
            console.log(role);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_authentication_authentication_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__shared_service_user_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nbody {\r\n  background-size: cover;\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.login-card {\r\n  padding: 40px;\r\n  max-width: 400px;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto 10px;\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n}\r\n\r\n.container-fluid{\r\n    margin-top: 100px !important; \r\n}\r\n\r\n.login-card h1 {\r\n  font-weight: 100;\r\n  text-align: center;\r\n  font-size: 2.3em;\r\n}\r\n\r\n.login-card input[type=submit] {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n}\r\n\r\n.login-card input[type=text], input[type=password] {\r\n  height: 44px;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  -webkit-appearance: none;\r\n  background: #fff;\r\n  border: 1px solid #d9d9d9;\r\n  border-top: 1px solid #c0c0c0;\r\n  /* border-radius: 2px; */\r\n  padding: 0 8px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n}\r\n\r\n.login-card input[type=text]:hover, input[type=password]:hover {\r\n  border: 1px solid #b9b9b9;\r\n  border-top: 1px solid #a0a0a0;\r\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.login {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: 'Arial', sans-serif;\r\n  font-weight: 700;\r\n  height: 36px;\r\n  padding: 0 8px;\r\n/* border-radius: 3px; */\r\n/* -webkit-user-select: none;\r\n  user-select: none; */\r\n}\r\n\r\n.login-submit {\r\n  /* border: 1px solid #3079ed; */\r\n  border: 0px;\r\n  color: #fff;\r\n  text-shadow: 0 1px rgba(0,0,0,0.1); \r\n  background-color: #4d90fe;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#4787ed)); */\r\n}\r\n\r\n.login-submit:hover {\r\n  /* border: 1px solid #2f5bb7; */\r\n  border: 0px;\r\n  text-shadow: 0 1px rgba(0,0,0,0.3);\r\n  background-color: #357ae8;\r\n  /* background-image: -webkit-gradient(linear, 0 0, 0 100%,   from(#4d90fe), to(#357ae8)); */\r\n}\r\n\r\n.login-card a {\r\n  text-decoration: none;\r\n  color: #666;\r\n  font-weight: 400;\r\n  text-align: center;\r\n  display: inline-block;\r\n  opacity: 0.6;\r\n  -webkit-transition: opacity ease 0.5s;\r\n  transition: opacity ease 0.5s;\r\n}\r\n\r\n.login-card a:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.login-help {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\n\r\n.login[_ngcontent-c1]{\r\n  width: 100% !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\r\n    <div class=\"login-card\">\r\n                <h1>Log-in</h1><br>\r\n              <form>\r\n                    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                                <label for=\"username\">Username</label>\r\n                                <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n                                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n                            </div>\r\n                            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                                <label for=\"password\">Password</label>\r\n                                <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <button [disabled]=\"loading\" class=\"login login-submit\">Login</button>\r\n                            </div>\r\n                        </form>\r\n              </form>\r\n            \r\n              <div class=\"login-help\">\r\n                <a href=\"#\">Forgot Password</a>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"!authenticationFlag\" class=\"help-block error small\">Username or password is incorrect.</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared-service/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.errorMessage = '';
        this.authenticationFlag = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password, 'password', 'store-read-write-client').subscribe(function (result) {
            if (result == true) {
                //login success
                console.log('login successfull ');
                _this.router.navigate(['home/dashboard']);
            }
            else {
                //login failed
                _this.error = "Username or password is incorrect";
                _this.authenticationFlag = false;
                _this.router.navigate([""]);
                _this.loading = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_authentication_authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/loyalty/loyalty.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn.btn-hasIcon .fa {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: -0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    color: #fff;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 35px;\r\n    background: #C81A2B;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.btn.btn-hasIcon .fa::before {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.btn.btn-info.btn-hasIcon .fa {\r\n    background: #087384;\r\n}\r\n\r\n.btn.btn-primary.btn-hasIcon .fa {\r\n    background: #095CB6;\r\n}\r\n\r\n.btn-hasIcon {\r\n    position: relative;\r\n    padding-left: 40px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    border: 0;\r\n    color: #fff !important;\r\n    margin: 3px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/loyalty/loyalty.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  10px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Change Loyalty</h3>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"dataTables_wrapper form-inline\" style=\"width: 100%\">\r\n\r\n    <table id=\"pagination\" class=\"table table-bordered datatable display\" style=\"width: 100%\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.N</th>\r\n          <th>Store Name</th>\r\n          <th>Group Name</th>\r\n          <th>Loyalty</th>\r\n          <th>Date</th>\r\n          <th>Active</th>\r\n          <th>Points</th>\r\n          <th>Options</th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let store  of stores; let i = index\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{store.storeName}}</td>\r\n          <td>{{store.networkGroup.groupName}}</td>\r\n          <td>{{store.loyalty.loyalty}}</td>\r\n          <td>{{store.loyalty.date}}</td>\r\n          <td>{{store.loyalty.active}}</td>\r\n          <td>{{store.totalPoints}}</td>\r\n\r\n          <td>\r\n            <a class=\"btn-hasIcon btn btn-info btn-sm\" (click)=\"editLoaytly(store)\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\r\n              <!-- [routerLink]=\"['/store/store_list',store.id]\" -->\r\n              <i class=\"fa fa-pencil\"></i>&nbsp;Edit </a>\r\n          </td>\r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n  <!-- model -->\r\n  <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Change Loyalty\r\n          </h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"contain\">\r\n            <form (ngSubmit)=\"changeLoaylty()\">\r\n\r\n              <input type=\"hidden\" ngModel name=\"id\" [(ngModel)]=\"stored.id\">\r\n\r\n              <input type=\"hidden\" ngModel name=\"id\" [(ngModel)]=\"stored.loyalty.id\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"groupname\">Group Name</label>\r\n                <select class=\"form-control\" id=\"groupname\" disabled>\r\n                  <option>{{stored.networkGroup.groupName}}</option>\r\n                </select>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"storename\">Store Name</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"storename\" placeholder=\"Store Name\" [value]=\"stored.storeName\" disabled>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"loyalti\">Loyalty %</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"loyalti\" ngModel name=\"loyalty\" [(ngModel)]=\"stored.loyalty.loyalty\" disabled>\r\n              </div>\r\n\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"newloyalti\">New Loyalty %</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"newloyalti\" placeholder=\" New Loyalty\" ngModel name=\"changeLoyalty\" [(ngModel)]=\"stored.loyalty.changeLoyalty\">\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"contactno\">Contact No</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"contactno\" placeholder=\"Contact Number\" [value]=\"stored.contactNo\" disabled>\r\n              </div>\r\n\r\n              <div>\r\n                <label for=\"active\">Change Loyalty</label>\r\n                <br>\r\n                <div class=\"form-check form-check-inline\">\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"active\" [value]=\"true\" ngModel name=\"active\" *ngIf=\"stored.loyalty.active === true ? 'checked':'unchecked'\"\r\n                    [(ngModel)]=\"stored.loyalty.active\">\r\n                  <label class=\"form-check-label\" for=\"active\">\r\n                    Yes\r\n                  </label>\r\n                  <input class=\"form-check-input\" type=\"radio\" id=\"inactive\" [value]=\"false\" ngModel name=\"active\" *ngIf=\"stored.loyalty.active === false ? 'checked':'unchecked'\"\r\n                    [(ngModel)]=\"stored.loyalty.active\">\r\n                  <label class=\"form-check-label\" for=\"inactive\">\r\n                    No\r\n                  </label>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"modal-footer\">\r\n                <input type=\"submit\" class=\"btn btn-success pull-right col-2\" value=\"Update\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n              </div>\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/loyalty/loyalty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoyaltyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_group_service_network_group_service__ = __webpack_require__("../../../../../src/app/shared-service/group-service/network-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service_loyalty_loyalty_update_service__ = __webpack_require__("../../../../../src/app/shared-service/loyalty/loyalty-update.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoyaltyComponent = /** @class */ (function () {
    function LoyaltyComponent(_storeService, _router, activatedRoute, _networkGroupService, _loyaltyService, formBuilder) {
        this._storeService = _storeService;
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this._networkGroupService = _networkGroupService;
        this._loyaltyService = _loyaltyService;
        this.formBuilder = formBuilder;
        this.stored = {
            id: null,
            storeName: "",
            contactName: "",
            email: "",
            address: "",
            contactNo: 0,
            points: {
                id: null,
                totalPoints: null
            },
            totalPoints: null,
            pointsSpend: 0,
            networkGroup: {
                groupId: null,
                groupName: "",
                contactNo: null,
                address: "",
                detail: "",
            },
            loyalty: {
                id: null,
                loyalty: 0,
                active: false,
                date: null,
                changeLoyalty: 0,
                changeDate: null
            }
        };
    }
    LoyaltyComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            $(function () {
                $("#pagination").DataTable();
            });
        }, 3000);
        this._storeService.getStores().subscribe(function (stores) {
            _this.stores = stores;
        }, function (error) {
            console.log(error);
        });
    };
    LoyaltyComponent.prototype.editLoaytly = function (store) {
        this._storeService.setter(store);
        this.stored = this._storeService.getter();
    };
    LoyaltyComponent.prototype.changeLoaylty = function () {
        var _this = this;
        this.stored.loyalty.changeDate = new Date();
        var prevLoyalty = this.stored.loyalty.loyalty;
        var newLoyalty = this.stored.loyalty.changeLoyalty;
        this.stored.loyalty.changeLoyalty = prevLoyalty;
        this.stored.loyalty.loyalty = newLoyalty;
        this._storeService.updateStore(this.stored).subscribe(function (store) {
            console.log(store);
            _this._router.navigate(['/loyalty']);
            $("#exampleModalCenter").modal("hide");
        });
        // this.loyal = {
        //   id: this.stored.loyalty.id,
        //   loyalty: this.loyalties,
        //   active: this.stored.loyalty.active,
        //   date: this.stored.loyalty.date,
        //   changeLoyalty: this.stored.loyalty.loyalty,
        //   changeDate: new Date()
        // };
        // this._loyaltyService.updateLoyalty(this.loyal).subscribe((store) => {
        //   console.log(store);
        //   this._router.navigate(['/loyalty']);
        // });
    };
    LoyaltyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loyalty',
            template: __webpack_require__("../../../../../src/app/components/loyalty/loyalty.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/loyalty/loyalty.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_service_store_service_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__shared_service_group_service_network_group_service__["a" /* NetworkGroupService */], __WEBPACK_IMPORTED_MODULE_5__shared_service_loyalty_loyalty_update_service__["a" /* LoyaltyUpdateService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], LoyaltyComponent);
    return LoyaltyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/network-group/add-network-group/add-network-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/network-group/add-network-group/add-network-group.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  10px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Add Group</h3>\r\n\r\n<div class=\"container\">\r\n  <div class=\"store-form\">\r\n    <div class=\"jumbotron\">\r\n\r\n      <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"groupForm\">\r\n\r\n        <div class=\"form-group\" [ngClass]=\"displayFieldCss('groupName')\">\r\n          <label for=\"groupName\">Group Name</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Group Name\" id=\"groupName\" formControlName=\"groupName\">\r\n          <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('groupName')\" style=\"color:#a94442;\">\r\n            <p *ngIf=\"groupForm.controls['groupName'].errors.required\">Group Name is required</p>\r\n            <p *ngIf=\"groupForm.controls['groupName'].errors.minlength\">Group Name must be 4 characters long.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"displayFieldCss('address')\">\r\n          <label for=\"address\">Address</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Address\" id=\"address\" formControlName=\"address\">\r\n          <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('address')\" style=\"color:#a94442;\">\r\n            <p *ngIf=\"groupForm.controls['address'].errors.required\">Addressis required</p>\r\n            <p *ngIf=\"groupForm.controls['address'].errors.minlength\">Group Name must be 4 characters long.</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"displayFieldCss('contactNo')\">\r\n          <label for=\"contactNo\">Contact No</label>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" id=\"contactNo\" formControlName=\"contactNo\">\r\n          <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('contactNo')\" style=\"color:#a94442;\">\r\n            <p *ngIf=\"groupForm.controls['contactNo'].errors.required\">Contact Number is required</p>\r\n            <p *ngIf=\"groupForm.controls['contactNo'].errors.pattern\"> Contact Number Must be Between 0-9</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"displayFieldCss('detail')\">\r\n          <label for=\"detail\">Group Details</label>\r\n          <textarea type=\"text\" class=\"form-control\" placeholder=\"Group Details\" id=\"detail\" formControlName=\"detail\"></textarea>\r\n          <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('detail')\" style=\"color:#a94442;\">\r\n            <p *ngIf=\"groupForm.controls['detail'].errors.required\">Group Details is required</p>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div formArrayName=\"points\">\r\n          <div *ngFor=\"let point of getControls(groupForm, 'points');let totalPoints = index\" [formGroupName]=\"totalPoints\">\r\n            <div class=\"form-group\">\r\n              <!-- [ngClass]=\"displayFieldCss('points.value')\" -->\r\n              <label for=\"point\">Points</label>\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Point\" id=\"point\" formControlName=\"totalPoints\">\r\n              <!-- <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('points.value')\" style=\"color:#a94442;\">\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <hr>\r\n        <div class=\"form-group\">\r\n          <input type=\"submit\" class=\"btn btn-success pull-right \" value=\" Save \">\r\n        </div>\r\n        <!-- </div> -->\r\n      </form>\r\n\r\n      <!-- Success Modal -->\r\n      <div id=\"successModal\" class=\"modal fade\">\r\n        <div class=\"modal-dialog modal-success\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <div class=\"icon-box\">\r\n                <i class=\"fa fa-check\"></i>\r\n              </div>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body text-center\">\r\n              <h4>Success!</h4>\r\n              <h5>Group Added Successfully</h5>\r\n              <button class=\"btn btn-success\" (click)=\"success()\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Error Modal -->\r\n      <div id=\"failureModal\" class=\"modal fade\">\r\n        <div class=\"modal-dialog modal-error\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <div class=\"icon-box\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </div>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body text-center\">\r\n              <h4>Ooops!</h4>\r\n              <h5>{{errorMessage.message}}</h5>\r\n              <button class=\"btn btn-success\" data-dismiss=\"modal\">Try Again</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/network-group/add-network-group/add-network-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNetworkGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_group_service_network_group_service__ = __webpack_require__("../../../../../src/app/shared-service/group-service/network-group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNetworkGroupComponent = /** @class */ (function () {
    function AddNetworkGroupComponent(_networkGroupService, _router, _formBuilder) {
        this._networkGroupService = _networkGroupService;
        this._router = _router;
        this._formBuilder = _formBuilder;
        this.errorMessage = {
            message: ""
        };
    }
    AddNetworkGroupComponent.prototype.ngOnInit = function () {
        this.createGroupform();
    };
    AddNetworkGroupComponent.prototype.getControls = function (frmGrp, key) {
        return frmGrp.controls[key].controls;
    };
    AddNetworkGroupComponent.prototype.createGroupform = function () {
        this.groupForm = this._formBuilder.group({
            "groupName": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4)]],
            "address": ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            "contactNo": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("^(0|[1-9][0-9]*)$")]],
            "detail": ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            "points": this._formBuilder.array([
                this._formBuilder.group({
                    "totalPoints": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("^(0|[1-9][0-9]*)$")]]
                })
            ])
        });
    };
    AddNetworkGroupComponent.prototype.isFieldValid = function (field) {
        return !this.groupForm.get(field).valid && this.groupForm.get(field).touched;
    };
    AddNetworkGroupComponent.prototype.isFieldSucess = function (field) {
        return this.groupForm.get(field).valid && this.groupForm.get(field).touched;
    };
    AddNetworkGroupComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-success': this.isFieldSucess(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    AddNetworkGroupComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(JSON.stringify(this.groupForm.value));
        if (this.groupForm.valid) {
            this._networkGroupService.addGroup(this.groupForm.value).subscribe(function (data) {
                console.log(data);
                _this.groupForm.reset();
                $("#successModal").modal("show");
            }, function (error) {
                _this.errorMessage = JSON.parse(error._body);
                $("#failureModal").modal("show");
            });
        }
    };
    AddNetworkGroupComponent.prototype.success = function () {
        $("#successModal").modal("hide");
        this._router.navigate(['home/group/group_list']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NgForm */])
    ], AddNetworkGroupComponent.prototype, "groupAddForm", void 0);
    AddNetworkGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-network-group',
            template: __webpack_require__("../../../../../src/app/components/network-group/add-network-group/add-network-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/network-group/add-network-group/add-network-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_service_group_service_network_group_service__["a" /* NetworkGroupService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], AddNetworkGroupComponent);
    return AddNetworkGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/network-group/group-transaction-detail/group-transaction-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/network-group/group-transaction-detail/group-transaction-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  10px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n    <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n    Group Transaction</h3>\r\n<div class=\"container\">\r\n    <div class=\"store-form\">\r\n        <div class=\"jumbotron\">\r\n            <div class=\"form-group\" [formGroup]=\"groupNameForm\">\r\n                <label for=\"groupname\" class=\"control-label required\">Group Name</label>\r\n                <select class=\"form-control\" id=\"groupname\" formControlName=\"groupId\">\r\n                    <option [ngValue]=\"\" [selected]>----Please Select Group----</option>\r\n                    <option *ngFor=\"let group of groupsName\" [ngValue]=\"group.groupId\">{{group.groupName}}</option>\r\n                </select>\r\n            </div>\r\n            <hr>\r\n            <input type=\"submit\" Value=\"View Transcation\" class=\"btn btn-success\" (click)=\"checkGroupName()\">\r\n        </div>\r\n    </div>\r\n\r\n    <div>\r\n\r\n    </div>\r\n\r\n    <div class=\"store-form\" *ngIf=\"detailsCheck==true\">\r\n        <div class=\"jumbotron\">\r\n            <h3>Transaction Details</h3>\r\n            <hr>\r\n            <table width=\"50%\" class=\"table table-bordered datatable display\">\r\n                <tr>\r\n                    <td>\r\n                        <label for=\"id\" class=\"table-head\">Group Id</label>\r\n                    </td>\r\n                    <td>\r\n                        <label>{{groupDetails.groupId}}</label>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <label for=\"name\" class=\"table-head\">Group Name</label>\r\n                    </td>\r\n                    <td>\r\n                        <label>{{groupDetails.groupName}}</label>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <label for=\"name\" class=\"table-head\">Group Address</label>\r\n                    </td>\r\n                    <td>\r\n                        <label>{{groupDetails.address}}</label>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        <label for=\"totalPoints\" class=\"table-head\">Total Points</label>\r\n                    </td>\r\n                    <td>\r\n                        <label>{{groupDetails.totalPoints}}</label>\r\n                    </td>\r\n                </tr>\r\n            </table>\r\n\r\n            <div class=\"dataTables_wrapper form-inline\">\r\n\r\n                <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>S.N</th>\r\n                            <th>Description</th>\r\n                            <th>Transaction Date</th>\r\n                            <th>Received Point</th>\r\n                            <th>Loyalty Paid</th>\r\n                            <th>Total Points</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let transaction  of pointTransaction; let i = index\">\r\n                            <td>{{i+1}}</td>\r\n                            <td>{{transaction.description}}</td>\r\n                            <td>{{transaction.transactionDate}}</td>\r\n                            <td>{{transaction.receivePoints}}</td>\r\n                            <td>{{transaction.transferPoints}}</td>\r\n                            <td>{{transaction.totalPoints}}</td>\r\n                            \r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<!-- (click)=\"checkMobileNo(customerValue.mobileNo)\" -->"

/***/ }),

/***/ "../../../../../src/app/components/network-group/group-transaction-detail/group-transaction-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupTransactionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_group_service_network_group_service__ = __webpack_require__("../../../../../src/app/shared-service/group-service/network-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_point_services_point_service_service__ = __webpack_require__("../../../../../src/app/shared-service/point-services/point-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupTransactionDetailComponent = /** @class */ (function () {
    function GroupTransactionDetailComponent(_groupService, _formBuilder, _pointTransaction) {
        this._groupService = _groupService;
        this._formBuilder = _formBuilder;
        this._pointTransaction = _pointTransaction;
        this.detailsCheck = false;
        this.groupDetails = {
            address: '',
            contactNo: null,
            detail: '',
            groupId: null,
            groupName: '',
            store: null,
            points: {
                id: null,
                totalPoints: null
            },
            totalPoints: null
        };
    }
    GroupTransactionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._groupService.getGroup().subscribe(function (data) {
            _this.groupsName = data;
        });
        this.createForm();
    };
    GroupTransactionDetailComponent.prototype.createForm = function () {
        this.groupNameForm = this._formBuilder.group({
            "groupId": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]
        });
    };
    GroupTransactionDetailComponent.prototype.checkGroupName = function () {
        var _this = this;
        console.log(this.groupNameForm.value);
        this.detailsCheck = true;
        this._groupService.getGroupById(this.groupNameForm.value.groupId).subscribe(function (data) {
            console.log(data);
            _this.groupDetails = data;
            _this._pointTransaction.getGroupTransaction(_this.groupNameForm.value.groupId).subscribe(function (data) {
                _this.pointTransaction = data;
            });
            console.log(_this.groupDetails.totalPoints);
        });
    };
    GroupTransactionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-group-transaction-detail',
            template: __webpack_require__("../../../../../src/app/components/network-group/group-transaction-detail/group-transaction-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/network-group/group-transaction-detail/group-transaction-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_group_service_network_group_service__["a" /* NetworkGroupService */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__shared_service_point_services_point_service_service__["a" /* PointServiceService */]])
    ], GroupTransactionDetailComponent);
    return GroupTransactionDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/network-group/list-network-group/list-network-group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn.btn-hasIcon .fa {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: -0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    color: #fff;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 35px;\r\n    background: #C81A2B;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.btn.btn-hasIcon .fa::before {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.btn.btn-success.btn-hasIcon .fa {\r\n    background:#006638;\r\n}\r\n\r\n.btn.btn-info.btn-hasIcon .fa {\r\n    background: #087384;\r\n}\r\n\r\n.btn.btn-primary.btn-hasIcon .fa {\r\n    background: #095CB6;\r\n}\r\n\r\n.btn-hasIcon {\r\n    position: relative;\r\n    padding-left: 40px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    border: 0;\r\n    color: #fff !important;\r\n    margin: 3px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/network-group/list-network-group/list-network-group.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  3px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Group List</h3>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <button class=\"btn-hasIcon btn btn-primary pull-right add-store\" (click)=\"newGroup()\">\r\n        <i class=\"fa fa-plus\"></i>&nbsp;\r\n        <span>Add Group</span>\r\n      </button>\r\n      <div style=\"clear:both; margin-bottom:30px;\"></div>\r\n\r\n      <div class=\"dataTables_wrapper form-inline\">\r\n        <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.N</th>\r\n              <th>Group Name</th>\r\n              <th>Address</th>\r\n              <th>Contact No</th>\r\n              <th>Details</th>\r\n              <th>Actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor='let networkGroup of networkGroups'>\r\n              <td>{{networkGroup.groupId}}</td>\r\n              <td>{{networkGroup.groupName}}</td>\r\n              <td>{{networkGroup.address}}</td>\r\n              <td>{{networkGroup.contactNo}}</td>\r\n              <td>{{networkGroup.detail}}</td>\r\n              <td>\r\n                <a class=\"btn-hasIcon btn btn-info btn-sm\" type=\"button\" name=\"edit\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"updateGroup(networkGroup)\">\r\n                  <i class=\"fa fa-pencil\"></i>&nbsp;Edit </a>\r\n                <a class=\"btn-hasIcon btn btn-danger btn-sm\" (click)=\"deleteGroup(networkGroup)\">\r\n                  <i class=\"fa fa-trash-o\"></i>&nbsp;Delete </a>\r\n                <a class=\"btn-hasIcon btn btn-success btn-sm\" (click)=\"pointDetails(networkGroup)\" data-toggle=\"modal\" data-target=\"#addPointModal\">\r\n                  <i class=\"fa fa-plus\"></i>&nbsp;Add Point </a>\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <!-- Delete modal -->\r\n      <div id=\"deleteModal\" class=\"modal fade\">\r\n        <div class=\"modal-dialog modal-delete\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <div class=\"icon-box\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </div>\r\n              <h4 class=\"modal-title\">Are you sure?</h4>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <p>Do you really want to delete this group? This process cannot be undone.</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirmDelete()\">Delete</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Modal -->\r\n      <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog\" role=\"document\">\r\n          <form (ngSubmit)=\"onUpdate()\" #f=\"ngForm\" id=\"editForm\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Update Group</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n\r\n              <div class=\"modal-body\">\r\n                <div class=\"contain\">\r\n                  <div class=\"form-group\">\r\n                    <label for=\"groupName\">Group Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"groupName\" ngModel name=\"groupName\" [(ngModel)]=\"networkGroup.groupName\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"address\">Address</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"address\" ngModel name=\"address\" [(ngModel)]=\"networkGroup.address\" required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"contactNo\">Contact No</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"contactNo\" ngModel name=\"contactNo\" pattern=\"[0-9]*\" [(ngModel)]=\"networkGroup.contactNo\"\r\n                      required>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"groupDetails\">Group Details</label>\r\n                    <textarea class=\"form-control\" ngModel name=\"details\" [(ngModel)]=\"networkGroup.detail\" required></textarea>\r\n                  </div>\r\n                  <hr>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!f.valid\">Update</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- Add Point Model -->\r\n      <div class=\"modal fade\" id=\"addPointModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">\r\n                Add Point\r\n              </h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"contain\">\r\n                <table width=\"100%\">\r\n                  <tr>\r\n                    <td>\r\n                      <label for=\"groupName\" class=\"table-head\">Group Name</label>\r\n                    </td>\r\n                    <td>\r\n                      <label>{{networkGroup.groupName}}</label>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <label for=\"storeName\" class=\"table-head\">\r\n                        Address\r\n                      </label>\r\n                    </td>\r\n                    <td>\r\n                      <label>{{networkGroup.address}}</label>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <label for=\"points\" class=\"table-head\">Point Balance</label>\r\n                    </td>\r\n                    <td>\r\n                      <label>{{networkGroup.totalPoints}}</label>\r\n                    </td>\r\n                  </tr>\r\n\r\n                </table>\r\n                <hr>\r\n                <div class=\"form-group\">\r\n                  <label for=\"pointAdd\">Point:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"point\" placeholder=\"Insert Point Here\" name=\"point\" ngModel [(ngModel)]=\"groupTransaction.transactionPoint\">\r\n                </div>\r\n\r\n                <div class=\"modal-footer\">\r\n                  <button class=\"btn btn-success\" (click)=\"addPoint()\">Confirm</button>\r\n                  <button class=\"btn btn-danger pull-right col-2\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n          <!-- Success Modal -->\r\n          <div id=\"successModal\" class=\"modal fade\">\r\n            <div class=\"modal-dialog modal-success\">\r\n                <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                        <div class=\"icon-box\">\r\n                            <i class=\"fa fa-check\"></i>\r\n                        </div>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                    </div>\r\n                    <div class=\"modal-body text-center\">\r\n                        <h4>Success!</h4>\r\n                        <h5>Point Added Successfully</h5>\r\n                        <button class=\"btn btn-success\" (click)=\"pointAddSuccess()\" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/network-group/list-network-group/list-network-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListNetworkGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_network_group__ = __webpack_require__("../../../../../src/app/model/network-group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_group_service_network_group_service__ = __webpack_require__("../../../../../src/app/shared-service/group-service/network-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_point_services_point_service_service__ = __webpack_require__("../../../../../src/app/shared-service/point-services/point-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListNetworkGroupComponent = /** @class */ (function () {
    function ListNetworkGroupComponent(_networkGroupService, _router, _pointTrasaction) {
        this._networkGroupService = _networkGroupService;
        this._router = _router;
        this._pointTrasaction = _pointTrasaction;
        this.networkGroup = new __WEBPACK_IMPORTED_MODULE_2__model_network_group__["a" /* NetworkGroup */](null, '', '', null, '', null, null);
        this.groupTransaction = {
            customerId: null,
            storeId: null,
            transactionPoint: null,
            groupId: null
        };
        this.sendPointDetails = [];
    }
    ListNetworkGroupComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $(document).ready(function () {
                $("#pagination").DataTable();
            });
        }, 3000);
        this.loadTable();
    };
    ListNetworkGroupComponent.prototype.deleteGroup = function (networkGroup) {
        this.groupForDelete = networkGroup;
        $("#deleteModal").modal("show");
    };
    ListNetworkGroupComponent.prototype.confirmDelete = function () {
        var _this = this;
        this._networkGroupService.deleteGroup(this.groupForDelete.groupId).subscribe(function (data) {
            _this.networkGroups.splice(_this.networkGroups.indexOf(_this.groupForDelete), 1);
            _this._router.navigate(['home/group/group_list']);
            $("#deleteModal").modal("hide");
        });
    };
    ListNetworkGroupComponent.prototype.updateGroup = function (networkGroup) {
        this._networkGroupService.setter(networkGroup);
        this.networkGroup = this._networkGroupService.getter();
    };
    ListNetworkGroupComponent.prototype.onUpdate = function () {
        var _this = this;
        this._networkGroupService.updateGroup(this.networkGroup).subscribe(function (group) {
            console.log(group);
            _this._router.navigate(['home/group/group_list']);
        });
    };
    ListNetworkGroupComponent.prototype.newGroup = function () {
        this._router.navigate(['home/group/group_add']);
    };
    ListNetworkGroupComponent.prototype.pointDetails = function (networkGroups) {
        this._networkGroupService.setter(networkGroups);
        this.networkGroup = this._networkGroupService.getter();
        this.groupTransaction.groupId = this.networkGroup.groupId;
    };
    ListNetworkGroupComponent.prototype.addPoint = function () {
        console.log(this.groupTransaction);
        this._pointTrasaction.addPointToGroup(this.groupTransaction).subscribe(function (data) {
            $("#addPointModal").modal("hide");
            $("#successModal").modal("show");
        });
    };
    ListNetworkGroupComponent.prototype.pointAddSuccess = function () {
        this.loadTable();
        $("#successModal").modal("hide");
    };
    ListNetworkGroupComponent.prototype.loadTable = function () {
        var _this = this;
        this._networkGroupService.getGroup().subscribe(function (networkGroup) {
            console.log(networkGroup);
            _this.networkGroups = networkGroup;
        }, function (error) {
            console.log(error);
        });
    };
    ListNetworkGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list-network-group',
            template: __webpack_require__("../../../../../src/app/components/network-group/list-network-group/list-network-group.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/network-group/list-network-group/list-network-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_service_group_service_network_group_service__["a" /* NetworkGroupService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_service_point_services_point_service_service__["a" /* PointServiceService */]])
    ], ListNetworkGroupComponent);
    return ListNetworkGroupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/points/points-trasaction/points-trasaction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/points/points-trasaction/points-trasaction.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  3px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n    <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Point transaction</h3>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n  \r\n        <div style=\"clear:both; margin-bottom:30px;\"></div>\r\n  \r\n        <div class=\"dataTables_wrapper form-inline\">\r\n            \r\n          <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n            <thead>\r\n              <tr>\r\n                <th>S.N</th>\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n                <th>Email</th>\r\n                <th>Phone No</th>\r\n                <th>Points</th>\r\n                <th>Options</th>\r\n              </tr>\r\n            </thead>\r\n  \r\n            <tbody>\r\n              <tr *ngFor=\"let customers  of customer; let i = index\">\r\n                <td>{{i+1}}</td>\r\n                <td>{{customers.id}} </td>\r\n                <td>{{customers.customerName}}</td>\r\n                <td>{{customers.email}}</td>\r\n                <td>{{customers.mobileNo}}</td>\r\n                <td>{{customers.totalPoints}}</td>\r\n                <td>\r\n                  <a class=\"btn-hasIcon btn btn-default btn-sm\" (click)=\"transferPoints(customers.id)\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n                    <!-- [routerLink]=\"['/store/store_list',store.id]\" -->\r\n                    <i class=\"fa fa-pencil\"></i>&nbsp;Transfer Points </a>\r\n                  <a class=\"btn-hasIcon btn btn-default btn-sm\" (click)=\"requestPoints(customers.mobileNo)\" data-toggle=\"modal\" data-target=\"#myModal\">\r\n                    <!-- data-toggle=\"modal\" data-target=\".bd-example-modal-sm\" -->\r\n                    <i class=\"fa fa-trash-o\"></i>&nbsp;Request Points </a>\r\n                </td>\r\n  \r\n              </tr>\r\n  \r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- mobile check modal -->\r\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Transfer Points</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"recipient-name\" class=\"control-label\">Mobile No</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"recipient-name\" ngModel name=\"mobileNo\" [(ngModel)]=\"customerValue.mobileNo\">\r\n            </div>\r\n  \r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" (click)=\"checkMobileNo(customerValue.mobileNo)\">\r\n            Next</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>  \r\n  \r\n  \r\n  <!-- transferPoint modal -->\r\n  <div class=\"modal fade\" id=\"transferPoint\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"transferPoint\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\" role=\"document\">\r\n      <form (ngSubmit)=\"pointTransfer()\"  #f=\"ngForm\" id=\"editForm\">  \r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Transfer Point</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          \r\n          <div class=\"modal-body\">\r\n            <div class=\"contain\">\r\n                  \r\n                  <div class=\"form-group\">\r\n                    <label for=\"id\">Id</label>\r\n                    <input type=\"text\" class=\"form-control\" value=\"{{customerValue.id}}\"  disabled>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"contactNo\">Points</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"points\" ngModel name=\"points\" [(ngModel)]=\"receiverDetail.transactionPoint\" pattern=\"[0-9]*\"  required>\r\n                  </div>\r\n                    <hr>\r\n                    </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!f.valid\"  >Transfer</button>\r\n          </div>\r\n        </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  \r\n  \r\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Request Points</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n  \r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <form>\r\n            <div class=\"form-group\">\r\n              <label for=\"recipient-name\" class=\"control-label\">Mobile No</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"recipient-name\">\r\n            </div>\r\n  \r\n          </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\">Send message</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/points/points-trasaction/points-trasaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointsTrasactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_customer_services_customer_service_service__ = __webpack_require__("../../../../../src/app/shared-service/customer-services/customer-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_point_services_point_service_service__ = __webpack_require__("../../../../../src/app/shared-service/point-services/point-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PointsTrasactionComponent = /** @class */ (function () {
    function PointsTrasactionComponent(_customerService, _pointService, _route) {
        this._customerService = _customerService;
        this._pointService = _pointService;
        this._route = _route;
        this.customerValue = {
            id: null,
            customerName: '',
            currentAddress: '',
            email: '',
            userName: '',
            password: '',
            mobileNo: null,
            store: null,
            points: {
                id: null,
                totalPoints: null,
            },
            dob: null,
            imagePath: null,
            sex: '',
            totalPoints: null
        };
        this.senderDetail = {
            customerId: null,
            transactionPoint: null,
            storeId: null,
            groupId: null
        };
        // transferpointdetails :any = [];
        this.transferpointdetails = [];
        this.receiverDetail = {
            customerId: null,
            transactionPoint: null,
            storeId: null,
            groupId: null
        };
    }
    PointsTrasactionComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $(document).ready(function () {
                $('#pagination').DataTable();
            });
        }, 3000);
        this.loadData();
    };
    PointsTrasactionComponent.prototype.transferPoints = function (id) {
        var _this = this;
        this._customerService.getCustomer(id).subscribe(function (sender) {
            _this.senderDetail.customerId = sender.id;
        });
    };
    PointsTrasactionComponent.prototype.pointTransfer = function () {
        var _this = this;
        this.senderDetail.transactionPoint = this.receiverDetail.transactionPoint;
        console.log("Sender detail");
        console.log(this.senderDetail);
        this.receiverDetail.customerId = this.customerValue.id;
        console.log("************************");
        console.log(this.receiverDetail);
        console.log("************************");
        this.transferpointdetails = [this.receiverDetail, this.senderDetail];
        console.log(this.transferpointdetails);
        this._pointService.transferPoints(this.transferpointdetails).subscribe(function (data) {
            _this.loadData();
        });
        $("#transferPoint").modal("hide");
    };
    PointsTrasactionComponent.prototype.requestPoints = function () {
    };
    PointsTrasactionComponent.prototype.checkMobileNo = function (mobileNo) {
        var _this = this;
        this._customerService.checkMobileNo(mobileNo).subscribe(function (data) {
            _this.customerValue = data;
            if (data === null) {
                console.error("Mobile No is Not Match");
            }
            else {
                console.log(data);
                $("#exampleModal").modal("hide");
                $("#transferPoint").modal("show");
            }
        });
    };
    PointsTrasactionComponent.prototype.loadData = function () {
        var _this = this;
        this._customerService.getCustomers().subscribe(function (data) {
            _this.customer = data;
        });
    };
    PointsTrasactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-points-trasaction',
            template: __webpack_require__("../../../../../src/app/components/points/points-trasaction/points-trasaction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/points/points-trasaction/points-trasaction.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_customer_services_customer_service_service__["a" /* CustomerServiceService */], __WEBPACK_IMPORTED_MODULE_3__shared_service_point_services_point_service_service__["a" /* PointServiceService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PointsTrasactionComponent);
    return PointsTrasactionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/store/store-add/store-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.store-form{\r\n    background-color:#f5f5f5;\r\n    border:#f5f5f5;\r\n    border-radius:10px;\r\n\r\n   -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n\r\n           box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n}\r\ndiv.form-holder{\r\n   \r\n    padding:15px;\r\n}\r\ndiv.store-form-holder{\r\n    padding:35px 38px 50px 44px\r\n}\r\n.control-label.required:after { \r\n    color: #d00;\r\n    content: \"*\";\r\n    position: absolute;\r\n    margin-left: 5px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/store/store-add/store-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  10px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n    <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n    Add Store</h3>\r\n<div class=\"container\">\r\n    <div class=\"store-form\">\r\n        <div class=\"jumbotron\">\r\n            <form (ngSubmit)=\"processForm()\" [formGroup]=\"storeAdd\">\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"groupname\" class=\"control-label required\">Group Name</label>\r\n                    <select class=\"form-control\" id=\"groupname\" formControlName=\"networkGroup\">\r\n                        <option [ngValue]=\"\" [selected]>----Please Select Group----</option>\r\n                        <option *ngFor=\"let group of groupname\" [ngValue]=\"group\">{{group.groupName}}</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{\r\n                            'has-error': storeAdd.controls['storeName'].invalid && (storeAdd.controls['storeName'].dirty || storeAdd.controls['storeName'].touched),\r\n                            'has-success': storeAdd.controls['storeName'].valid && (storeAdd.controls['storeName'].dirty || storeAdd.controls['storeName'].touched)\r\n                            }\">\r\n                    <label for=\"storename\" class=\"control-label required\">Store Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"storename\" placeholder=\"Store Name\" formControlName=\"storeName\">\r\n\r\n                    <div class=\"form-control-feedback\" *ngIf=\"storeAdd.controls['storeName'].errors && (storeAdd.controls['storeName'].dirty || storeAdd.controls['storeName'].touched)\"\r\n                        style=\"color:#a94442;\">\r\n                        <p *ngIf=\"storeAdd.controls['storeName'].errors.required\">Store Name is required</p>\r\n                        <p *ngIf=\"storeAdd.controls['storeName'].errors.minlength\">Store Name must be at least 4 characters long.</p>\r\n\r\n                    </div>\r\n                    <!-- <span *ngIf=\"storeAdd.controls['storeName'].invalid && (storeAdd.controls['storeName'].dirty || storeAdd.controls['storeName'].touched)\"\r\n                                style=\"color:#a94442;\">\r\n                                <div *ngIf=\"storeAdd.controls['storeName'].errors.required\">\r\n                                    Name is required.\r\n                                </div>\r\n                                <div *ngIf=\"storeAdd.controls['storeName'].errors.minlength\">\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n\r\n                            </span> -->\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{\r\n                                'has-error': storeAdd.controls['contactName'].invalid && (storeAdd.controls['contactName'].dirty || storeAdd.controls['contactName'].touched),\r\n                                'has-success': storeAdd.controls['contactName'].valid && (storeAdd.controls['contactName'].dirty || storeAdd.controls['contactName'].touched)\r\n                                }\">\r\n                    <label for=\"contactName\" class=\"control-label required\">Contact Name</label>\r\n\r\n                    <input type=\"text\" class=\"form-control\" id=\"contactName\" placeholder=\"Contact Name\" formControlName=\"contactName\">\r\n\r\n                    <div class=\"form-control-feedback\" *ngIf=\"storeAdd.controls['contactName'].errors && (storeAdd.controls['contactName'].dirty || storeAdd.controls['contactName'].touched)\"\r\n                        style=\"color:#a94442;\">\r\n                        <p *ngIf=\"storeAdd.controls['contactName'].errors.required\">Contact Name is required</p>\r\n                        <p *ngIf=\"storeAdd.controls['contactName'].errors.minlength\">Cotact Name must be at least 4 characters long.</p>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{\r\n                                'has-error': storeAdd.controls['address'].invalid && (storeAdd.controls['address'].dirty || storeAdd.controls['address'].touched),\r\n                                'has-success': storeAdd.controls['address'].valid && (storeAdd.controls['address'].dirty || storeAdd.controls['address'].touched)\r\n                                }\">\r\n                    <label for=\"address\" class=\"control-label required\">Address</label>\r\n\r\n                    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Address\" formControlName=\"address\">\r\n\r\n                    <div class=\"form-control-feedback\" *ngIf=\"storeAdd.controls['address'].errors && (storeAdd.controls['address'].dirty || storeAdd.controls['address'].touched)\"\r\n                        style=\"color:#a94442;\">\r\n                        <p *ngIf=\"storeAdd.controls['address'].errors.required\">Store Address is required</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{\r\n                            'has-error': storeAdd.controls['email'].invalid && (storeAdd.controls['email'].dirty || storeAdd.controls['email'].touched),\r\n                            'has-success': storeAdd.controls['email'].valid && (storeAdd.controls['email'].dirty || storeAdd.controls['email'].touched)\r\n                            }\">\r\n                    <label for=\"email\" class=\"control-label required\">Email</label>\r\n                    <input type=\"Email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" formControlName=\"email\">\r\n                    <div class=\"form-control-feedback\" *ngIf=\"storeAdd.controls['email'].errors && (storeAdd.controls['email'].dirty || storeAdd.controls['email'].touched)\"\r\n                        style=\"color:#a94442;\">\r\n                        <p *ngIf=\"storeAdd.controls['email'].errors.required\">Email Address is required</p>\r\n                        <p *ngIf=\"storeAdd.controls['email'].errors.email\">Please Enter valid Email Adderss</p>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" [ngClass]=\"{\r\n                                    'has-error': storeAdd.controls['contactNo'].invalid && (storeAdd.controls['contactNo'].dirty || storeAdd.controls['contactNo'].touched),\r\n                                    'has-success': storeAdd.controls['contactNo'].valid && (storeAdd.controls['contactNo'].dirty || storeAdd.controls['contactNo'].touched)\r\n                                    }\">\r\n                    <label for=\"contactno\" class=\"control-label required\">Contact No</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"contactno\" placeholder=\"Contact Number\" formControlName=\"contactNo\">\r\n\r\n                    <div class=\"form-control-feedback\" *ngIf=\"storeAdd.controls['contactNo'].errors && (storeAdd.controls['contactNo'].dirty || storeAdd.controls['contactNo'].touched)\"\r\n                        style=\"color:#a94442;\">\r\n                        <p *ngIf=\"storeAdd.controls['contactNo'].errors.required\">Contact Number is required</p>\r\n                        <p *ngIf=\"storeAdd.controls['contactNo'].errors.pattern\">Contact Number is between 0-9</p>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div formArrayName=\"points\">\r\n                    <div *ngFor=\"let point of getControls(storeAdd, 'points');let totalPoints = index\" [formGroupName]=\"totalPoints\">\r\n                        <div class=\"form-group\" [ngClass]=\"{\r\n                            'has-error': storeAdd.controls['points'].invalid && (storeAdd.controls['points'].dirty || storeAdd.controls['points'].touched),\r\n                            'has-success': storeAdd.controls['points'].valid && (storeAdd.controls['points'].dirty || storeAdd.controls['points'].touched)\r\n                            }\">\r\n                            <label for=\"point\">Points</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Point\" id=\"point\" formControlName=\"totalPoints\">\r\n\r\n                            <div class=\"form-control-feedback\" *ngIf=\"storeAdd.controls['points'].errors && (storeAdd.controls['points'].dirty || storeAdd.controls['points'].touched)\"\r\n                                style=\"color:#a94442;\">\r\n                                <p *ngIf=\"storeAdd.controls['points'].errors.required\">Point is required</p>\r\n                                <p *ngIf=\"storeAdd.controls['points'].errors.pattern\">Enter numbers only</p>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" formGroupName=\"loyalty\" [ngClass]=\"displayFieldCss('loyalty.loyalty')\">\r\n                    <label for=\"loyalti\" class=\"control-label required\">Loyalty</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"loyalti\" placeholder=\"Loyalti\" formControlName=\"loyalty\">\r\n                    <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('loyalty.loyalty')\" style=\"color:#a94442;\">\r\n                        <small>Loyalty is required</small>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"form-group\" formGroupName=\"loyalty\" [ngClass]=\"displayFieldCss('loyalty.date')\">\r\n                    <label for=\"date\" class=\"control-label required\">Date</label>\r\n                    <input type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"Loyalti\" formControlName=\"date\">\r\n                    <div class=\"form-control-feedback\" *ngIf=\"isFieldValid('loyalty.date')\" style=\"color:#a94442;\">\r\n                        <p>Date is required</p>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div formGroupName=\"loyalty\">\r\n                    <label for=\"active\" class=\"control-label required\">Change Loyalty</label>\r\n                    <br>\r\n                    <div class=\"form-check form-check-inline\">\r\n                        <input class=\"form-check-input\" type=\"radio\" formControlName=\"active\" id=\"active\" value=\"true\" checked>\r\n                        <label class=\"form-check-label\" for=\"active\">\r\n                            Yes\r\n                        </label>\r\n                        <input class=\"form-check-input\" type=\"radio\" formControlName=\"active\" id=\"inactive\" value=\"false\">\r\n                        <label class=\"form-check-label\" for=\"inactive\">\r\n                            No\r\n                        </label>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <input type=\"submit\" class=\"btn btn-success pull-right col-2\" value=\"Save\">\r\n                </div>\r\n            </form>\r\n\r\n            <!-- Success Modal -->\r\n            <div id=\"successModal\" class=\"modal fade\">\r\n                <div class=\"modal-dialog modal-success\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <div class=\"icon-box\">\r\n                                <i class=\"fa fa-check\"></i>\r\n                            </div>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                        </div>\r\n                        <div class=\"modal-body text-center\">\r\n                            <h4>Success!</h4>\r\n                            <h5>Store Added Successfully</h5>\r\n                            <button class=\"btn btn-success\" (click)=\"success()\" data-dismiss=\"modal\">Close</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Error Modal -->\r\n            <div id=\"failureModal\" class=\"modal fade\">\r\n                <div class=\"modal-dialog modal-error\">\r\n                    <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                            <div class=\"icon-box\">\r\n                                <i class=\"fa fa-times\"></i>\r\n                            </div>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                        </div>\r\n                        <div class=\"modal-body text-center\">\r\n                            <h4>Ooops!</h4>\r\n                            <h5>{{errorMessage.message}}</h5>\r\n                            <button class=\"btn btn-success\" data-dismiss=\"modal\">Try Again</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/store/store-add/store-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_group_service_network_group_service__ = __webpack_require__("../../../../../src/app/shared-service/group-service/network-group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreAddComponent = /** @class */ (function () {
    function StoreAddComponent(formBuilder, _storeService, _router, _networkGroupService) {
        this.formBuilder = formBuilder;
        this._storeService = _storeService;
        this._router = _router;
        this._networkGroupService = _networkGroupService;
        this.emailPattern = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
        this.groupname = [];
        this.errorMessage = {
            message: ""
        };
    }
    StoreAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this._networkGroupService.getGroup().subscribe(function (group) {
            _this.groupname = group;
        });
    };
    StoreAddComponent.prototype.getControls = function (frmGrp, key) {
        return frmGrp.controls[key].controls;
    };
    StoreAddComponent.prototype.createForm = function () {
        this.storeAdd = this.formBuilder.group({
            "storeName": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4)]],
            "contactName": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4)]],
            "email": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]],
            "address": ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            "contactNo": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[0-9]*")]],
            // "points": ['', [Validators.required, Validators.pattern("[0-9]*")]],
            "points": this.formBuilder.array([
                this.formBuilder.group({
                    "totalPoints": ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("^(0|[1-9][0-9]*)$")]]
                })
            ]),
            "loyalty": this.formBuilder.group({
                "loyalty": ['2', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[0-9]*."), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(1)]],
                "active": ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
                "date": ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            }),
            networkGroup: []
        });
    };
    StoreAddComponent.prototype.isFieldValid = function (field) {
        return !this.storeAdd.get(field).valid && this.storeAdd.get(field).touched;
    };
    StoreAddComponent.prototype.isFieldSucess = function (field) {
        return this.storeAdd.get(field).valid && this.storeAdd.get(field).touched;
    };
    StoreAddComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-success': this.isFieldSucess(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    StoreAddComponent.prototype.processForm = function () {
        var _this = this;
        if (this.storeAdd.valid) {
            console.log(JSON.stringify(this.storeAdd.value));
            this._storeService.createStore(this.storeAdd.value).subscribe(function (stores) {
                console.log(stores);
                _this.storeAdd.reset();
                $("#successModal").modal("show");
            }, function (error) {
                _this.errorMessage = JSON.parse(error._body);
                console.log(_this.errorMessage.message);
                $("#failureModal").modal("show");
            });
        }
    };
    StoreAddComponent.prototype.success = function () {
        $("#successModal").modal("hide");
        this._router.navigate(['/home/store/store_list']);
    };
    StoreAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-store-add',
            template: __webpack_require__("../../../../../src/app/components/store/store-add/store-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/store/store-add/store-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_store_service_store_service__["a" /* StoreService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__shared_service_group_service_network_group_service__["a" /* NetworkGroupService */]])
    ], StoreAddComponent);
    return StoreAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/store/store-list/store-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn.btn-hasIcon .fa {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: -0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    color: #fff;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    width: 35px;\r\n    background: #C81A2B;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n.btn.btn-hasIcon .fa::before {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n.btn.btn-success.btn-hasIcon .fa {\r\n    background:#006638;\r\n}\r\n\r\n.btn.btn-info.btn-hasIcon .fa {\r\n    background: #087384;\r\n}\r\n\r\n.btn.btn-primary.btn-hasIcon .fa {\r\n    background: #095CB6;\r\n}\r\n\r\n.btn-hasIcon {\r\n    position: relative;\r\n    padding-left: 40px;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    border: 0;\r\n    color: #fff !important;\r\n    margin: 3px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/store/store-list/store-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  3px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Store List</h3>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <button class=\"btn-hasIcon btn btn-primary pull-right add-store\" (click)=\"newStore()\">\r\n        <i class=\"fa fa-plus\"></i>&nbsp;\r\n        <span>Add Store</span>\r\n      </button>\r\n      <div style=\"clear:both; margin-bottom:30px;\"></div>\r\n\r\n      <div class=\"dataTables_wrapper form-inline\">\r\n\r\n        <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.N</th>\r\n              <th>Store Name</th>\r\n              <th>Group</th>\r\n              <th>Contact Name</th>\r\n              <th>Address</th>\r\n              <th>Contact No.</th>\r\n              <th>Email</th>\r\n              <th>Loyalty</th>\r\n              <th>Options</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr *ngFor=\"let store  of stores; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{store.storeName}}</td>\r\n              <td>{{store.networkGroup.groupName}}</td>\r\n              <td>{{store.contactName}}</td>\r\n              <td>{{store.address}}</td>\r\n              <td>{{store.contactNo}}</td>\r\n              <td>{{store.email}}</td>\r\n              <td>{{store.loyalty.loyalty}}</td>\r\n              <td>\r\n                <a class=\"btn-hasIcon btn btn-info btn-sm\" (click)=\"editUser(store)\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\r\n                  <!-- [routerLink]=\"['/store/store_list',store.id]\" -->\r\n                  <i class=\"fa fa-pencil\"></i>&nbsp;Edit </a>\r\n                <a class=\"btn-hasIcon btn btn-danger btn-sm\" (click)=\"deleteStore(store)\">\r\n                  <i class=\"fa fa-trash-o\"></i>&nbsp;Delete </a>\r\n                <a class=\"btn-hasIcon btn btn-success btn-sm\" (click)=\"pointDetail(store)\" data-toggle=\"modal\" data-target=\"#addPointModal\">\r\n                  <i class=\"fa fa-plus\"></i>&nbsp;Add Point </a>\r\n              </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- Delete modal -->\r\n      <div id=\"deleteModal\" class=\"modal fade\">\r\n          <div class=\"modal-dialog modal-delete\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <div class=\"icon-box\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </div>\t\t\t\t\r\n                <h4 class=\"modal-title\">Are you sure?</h4>\t\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <p>Do you really want to delete this store? This process cannot be undone.</p>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"confirmDelete()\">Delete</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>  \r\n\r\n       <!-- Success Modal -->\r\n       <div id=\"successModal\" class=\"modal fade\">\r\n          <div class=\"modal-dialog modal-success\">\r\n              <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                      <div class=\"icon-box\">\r\n                          <i class=\"fa fa-check\"></i>\r\n                      </div>\r\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n                  </div>\r\n                  <div class=\"modal-body text-center\">\r\n                      <h4>Success!</h4>\r\n                      <h5>Point Added Successfully</h5>\r\n                      <button class=\"btn btn-success\" (click)=\"pointAddSuccess()\" data-dismiss=\"modal\">Close</button>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      \r\n      <!-- Edit Store Modal -->\r\n      <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Edit Store\r\n              </h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"contain\">\r\n\r\n                <form (ngSubmit)=\"updateForm()\">\r\n\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"id\" [(ngModel)]=\"stored.id\" hidden>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"groupname\">Group Name</label>\r\n                    <select class=\"form-control\" id=\"groupname\" ngModel name=\"networkGroup\" [(ngModel)]=\"stored.networkGroup\">\r\n                      <option *ngFor=\"let groups of group\" [ngValue]=\"groups\" selected>{{groups.groupName}}</option>\r\n                    </select>\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"storename\">Store Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"storename\" placeholder=\"Store Name\" [(ngModel)]=\"stored.storeName\" ngModel name=\"storeName\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"contactName\">Contact Name</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"contactName\" name=\"contactName\" [(ngModel)]=\"stored.contactName\" placeholder=\"Contact Name\">\r\n                  </div>\r\n\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"address\">Address</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Address\" name=\"address\" [(ngModel)]=\"stored.address\">\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input type=\"Email\" class=\"form-control\" id=\"email\" placeholder=\"Email\" name=\"email\" [(ngModel)]=\"stored.email\">\r\n                  </div>\r\n\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"contactno\">Contact No</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"contactno\" placeholder=\"Contact Number\" ngModel name=\"contactNo\" [(ngModel)]=\"stored.contactNo\">\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"loyalti\">Loyalty</label>\r\n                    <input type=\"number\" class=\"form-control\" id=\"loyalti\" placeholder=\"Loyalti\" ngModel name=\"loyalty\" [(ngModel)]=\"stored.loyalty.loyalty\"\r\n                      disabled>\r\n                  </div>\r\n\r\n                  <div class=\"modal-footer\">\r\n                    <input type=\"submit\" class=\"btn btn-success pull-right col-2\" value=\"Update\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                  </div>\r\n                </form>\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Add Point Model -->\r\n      <div class=\"modal fade\" id=\"addPointModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">\r\n                Add Point\r\n              </h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div class=\"contain\">\r\n                <table width=\"100%\">\r\n                  <tr>\r\n                    <td>\r\n                      <label for=\"groupName\" class=\"table-head\">Group Name</label>\r\n                    </td>\r\n                    <td>\r\n                      <label>{{stored.networkGroup.groupName}}</label>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <label for=\"storeName\" class=\"table-head\">Store Name</label>\r\n                    </td>\r\n                    <td>\r\n                      <label>{{stored.storeName}}</label>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <label for=\"points\" class=\"table-head\">Point Balance</label>\r\n                    </td>\r\n                    <td>\r\n                      <label>{{stored.totalPoints}}</label>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <label for=\"address\" class=\"table-head\">Address</label>\r\n                    </td>\r\n                    <td>\r\n                      <label>{{stored.address}}</label>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n                <hr>\r\n                <div class=\"form-group\">\r\n                  <label for=\"pointAdd\">Point:</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"point\" placeholder=\"Insert Point Here\" name=\"point\" ngModel [(ngModel)]=\"storeTransaction.transactionPoint\">\r\n                </div>\r\n\r\n                <div class=\"modal-footer\">\r\n                  <button class=\"btn btn-success\" (click)=\"addPoint()\">Confirm</button>\r\n                  <button class=\"btn btn-danger pull-right col-2\" data-dismiss=\"modal\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/store/store-list/store-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_group_service_network_group_service__ = __webpack_require__("../../../../../src/app/shared-service/group-service/network-group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service_point_services_point_service_service__ = __webpack_require__("../../../../../src/app/shared-service/point-services/point-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreListComponent = /** @class */ (function () {
    function StoreListComponent(_storeService, _router, activatedRoute, _networkGroupService, _pointService) {
        this._storeService = _storeService;
        this._router = _router;
        this.activatedRoute = activatedRoute;
        this._networkGroupService = _networkGroupService;
        this._pointService = _pointService;
        this.stores = [];
        this.stored = {
            id: null,
            storeName: "",
            contactName: "",
            email: "",
            address: "",
            contactNo: 0,
            points: {
                id: null,
                totalPoints: null
            },
            totalPoints: null,
            pointsSpend: 0,
            networkGroup: {
                groupId: null,
                groupName: '',
                address: '',
                contactNo: 0,
                detail: ''
            },
            loyalty: {
                id: null,
                loyalty: 0,
                active: false,
                date: null,
                changeLoyalty: 0,
                changeDate: null
            }
        };
        this.group = [];
        this.storeTransaction = {
            customerId: null,
            storeId: null,
            transactionPoint: null,
            groupId: null
        };
        this.sendPointDetails = [];
    }
    StoreListComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            $(function () {
                $("#pagination").DataTable();
            });
        }, 3000);
        this.loadTable();
        this._networkGroupService.getGroup().subscribe(function (groupName) {
            console.log("group");
            console.log(groupName);
            _this.group = groupName;
        });
    };
    StoreListComponent.prototype.deleteStore = function (store) {
        this.storeForDelete = store;
        $("#deleteModal").modal("show");
    };
    StoreListComponent.prototype.confirmDelete = function () {
        var _this = this;
        this._storeService.deleteStore(this.storeForDelete.id).subscribe(function (data) {
            _this.stores.splice(_this.stores.indexOf(_this.storeForDelete), 1);
        }, function (error) {
            console.log(error);
        });
        $("#deleteModal").modal("hide");
    };
    StoreListComponent.prototype.editUser = function (store) {
        this._storeService.setter(store);
        this.stored = this._storeService.getter();
    };
    StoreListComponent.prototype.pointDetail = function (store) {
        this._storeService.setter(store);
        this.stored = this._storeService.getter();
        console.log("storeId " + this.stored.id);
        this.storeTransaction.groupId = this.stored.networkGroup.groupId;
        this.storeTransaction.storeId = this.stored.id;
    };
    StoreListComponent.prototype.addPoint = function () {
        this.sendPointDetails = [this.storeTransaction];
        console.log("================================");
        console.log(this.sendPointDetails);
        console.log(this.storeTransaction);
        console.log("================================");
        this._pointService.addPointToStore(this.sendPointDetails).subscribe(function (data) {
            console.log("success");
            $("#addPointModal").modal("hide");
            $("#successModal").modal("show");
        });
    };
    StoreListComponent.prototype.pointAddSuccess = function () {
        this.loadTable();
        $("#successModal").modal("hide");
    };
    StoreListComponent.prototype.newStore = function () {
        var store;
        this._storeService.setter(store);
        this._router.navigate(['/home/store/store_add']);
    };
    StoreListComponent.prototype.updateForm = function () {
        var _this = this;
        this._storeService.updateStore(this.stored).subscribe(function (store) {
            console.log(store);
            _this._router.navigate(['/home/store/store_list']);
        });
        $("#exampleModalCenter").modal("hide");
    };
    StoreListComponent.prototype.loadTable = function () {
        var _this = this;
        this._storeService.getStores().subscribe(function (stores) {
            _this.stores = stores;
            console.log(stores);
        }, function (error) {
            console.log(error);
        });
    };
    StoreListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-store-list',
            template: __webpack_require__("../../../../../src/app/components/store/store-list/store-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/store/store-list/store-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service_store_service_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_service_group_service_network_group_service__["a" /* NetworkGroupService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_service_point_services_point_service_service__["a" /* PointServiceService */]])
    ], StoreListComponent);
    return StoreListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/store/store-top-spender/store-top-spender.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/store/store-top-spender/store-top-spender.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  3px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Store Top Spender</h3>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n\r\n      <div style=\"clear:both; margin-bottom:10px;\"></div>\r\n      <div class=\"dataTables_wrapper form-inline\">\r\n\r\n        <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Store Name</th>\r\n              <th>Group</th>\r\n              <th>Contact Name</th>\r\n              <th>Address</th>\r\n              <th>Contact No.</th>\r\n              <th>Email</th>\r\n              <th>Loyalty</th>\r\n              <th>Points</th>\r\n              <th>Points Spend</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n            <tr *ngFor=\"let store of store;\">\r\n              <td>{{store.id}} </td>\r\n              <td>{{store.storeName}}</td>\r\n              <td>{{store.networkGroup.groupName}}</td>\r\n              <td>{{store.contactName}}</td>\r\n              <td>{{store.address}}</td>\r\n              <td>{{store.contactNo}}</td>\r\n              <td>{{store.email}}</td>\r\n              <td>{{store.loyalty.loyalty}}</td>\r\n              <td>{{store.totalPoints}}</td>\r\n              <td>{{store.pointsSpend}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/store/store-top-spender/store-top-spender.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreTopSpenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreTopSpenderComponent = /** @class */ (function () {
    function StoreTopSpenderComponent(_storeService) {
        this._storeService = _storeService;
    }
    // store: Store = {
    //   id: null,
    //   storeName: "",
    //   contactName: "",
    //   email: "",
    //   address: "",
    //   contactNo: 0,
    //   points: {
    //     id:null,
    //     totalPoints:null
    //   },
    //   totalPoints:null,
    //   pointsSpend :0,
    //   networkGroup: {
    //     groupId: null,
    //     groupName: '',
    //     address: '',
    //     contactNo: 0,
    //     detail: ''
    //   },
    //   loyalty: {
    //     id: null,
    //     loyalty: 0,
    //     active: false,
    //     date: null,
    //     changeLoyalty: 0,
    //     changeDate: null
    //   }
    // }
    StoreTopSpenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storeService.getStoreByTopSpender().subscribe(function (topSpender) {
            _this.store = topSpender;
        });
    };
    StoreTopSpenderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-store-top-spender',
            template: __webpack_require__("../../../../../src/app/components/store/store-top-spender/store-top-spender.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/store/store-top-spender/store-top-spender.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_store_service_store_service__["a" /* StoreService */]])
    ], StoreTopSpenderComponent);
    return StoreTopSpenderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/store/store-transaction-detail/store-transaction-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-check {\r\n    padding-left: 0rem;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n    border: 1px solid red;    \r\n}\r\nselect.ng-invalid.ng-touched{\r\n    border: 1px solid red;    \r\n}\r\n.help-block{\r\n    color:red;\r\n}\r\ndiv.store-form{\r\n    background-color:#f5f5f5;\r\n    border:#f5f5f5;\r\n    border-radius:10px;\r\n\r\n   -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n\r\n           box-shadow: 0 0 20px rgba(0,0,0,0.11);\r\n}\r\ndiv.form-holder{\r\n   \r\n    padding:15px;\r\n}\r\ndiv.store-form-holder{\r\n    padding:35px 38px 50px 44px\r\n}\r\n.control-label.required:after { \r\n    color: #d00;\r\n    content: \"*\";\r\n    position: absolute;\r\n    margin-left: 5px;\r\n  }\r\n.table-head{\r\n    font-weight: bold\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/store/store-transaction-detail/store-transaction-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 style=\"margin:32px 0  10px 15px; color:#818da1; font-weight: 300; font-size:25px;\">\r\n  <i class=\"fa fa-arrow-circle-o-right\"></i>\r\n  Store Transaction</h3>\r\n<div class=\"container\">\r\n  <div class=\"store-form\">\r\n    <div class=\"jumbotron\">\r\n      <div class=\"form-group\">\r\n        <label for=\"storeName\">Select Store Name</label>\r\n        <select class=\"form-control\" id=\"storeName\" ngModel name=\"storeName\" (ngModelChange)=\"onChange($event)\" [(ngModel)]=\"store\"\r\n          required>\r\n          <option value=\"\">--Select Store--</option>\r\n          <option *ngFor=\"let store of storeList\" [ngValue]=\"store\">{{store.storeName}}</option>\r\n        </select>\r\n      </div>\r\n      <hr>\r\n      <button type=\"submit\" class=\"btn btn-success\" (click)=\"viewTransaction()\">Get Transaction </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"store-form\" *ngIf=\"showTable==true\">\r\n    <div class=\"jumbotron\">\r\n      <h3>Transaction Details</h3>\r\n      <hr>\r\n      <table width=\"50%\" class=\"table table-bordered datatable display\">\r\n        <tr>\r\n          <td>\r\n            <label for=\"id\" class=\"table-head\">Id</label>\r\n          </td>\r\n          <td>\r\n            <label>{{storeInfo.id}}</label>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <label for=\"groupName\" class=\"table-head\">Group Name</label>\r\n          </td>\r\n          <td>\r\n            <label>{{storeInfo.networkGroup.groupName}}</label>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <label for=\"storeName\" class=\"table-head\">Store Name</label>\r\n          </td>\r\n          <td>\r\n            <label>{{storeInfo.storeName}}</label>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <label for=\"totalPoints\" class=\"table-head\">Total Points</label>\r\n          </td>\r\n          <td>\r\n            <label>{{storeInfo.totalPoints}}</label>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"jumbotron\">\r\n      <!-- Date Picker for filtering -->\r\n      <div class=\"filter-by-date\">\r\n        <div class=\"form-group\" style=\"float:left; padding-right:12px;\">\r\n          <label>Filter By Date</label>\r\n        </div>\r\n        <form (ngSubmit)=\"viewTransaction()\">\r\n          <div class=\"form-group\" style=\"float:left; padding-right:12px;\">\r\n            <label for=\"startDate\">From</label>\r\n            <input type=\"date\" class=\"form-control\" ngModel name=\"startDate\" [(ngModel)]=\"startDate\" style=\"width: 170px\" id=\"startDate\" required>\r\n          </div>\r\n          <div class=\"form-group\" style=\"float:left; padding-right:12px;\">\r\n            <label for=\"endDate\">To</label>\r\n            <input type=\"date\" class=\"form-control\" ngModel name=\"endDate\" [(ngModel)]=\"endDate\" style=\"width: 170px\" id=\"endDatDate\" required>\r\n          </div>\r\n          <div class=\"checkbox\">\r\n            <label><input type=\"checkbox\" value=\"\">Option 1</label>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input type=\"submit\" class=\"btn btn-success pull-right col-2\" value=\"Filter\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"dataTables_wrapper form-inline\">\r\n        <table id=\"pagination\" class=\"table table-bordered datatable display\">\r\n          <thead>\r\n            <tr>\r\n              <th>S.N</th>\r\n              <th>Description</th>\r\n              <th>Transaction Date</th>\r\n              <th>Received Point</th>\r\n              <th>Purchase Amount</th>\r\n              <th>Loyalty Paid</th>\r\n              <th>Total Points</th>\r\n\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let transaction  of storeTransaction; let i = index\">\r\n              <td>{{i+1}}</td>\r\n              <td>{{transaction.description}}</td>\r\n              <td>{{transaction.transactionDate}}</td>\r\n              <td>{{transaction.receivePoints}}</td>\r\n              <td>{{transaction.paidAmount}}</td>\r\n              <td>{{transaction.transferPoints}}</td>\r\n              <td>{{transaction.totalPoints}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/store/store-transaction-detail/store-transaction-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreTransactionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service_store_service_store_service__ = __webpack_require__("../../../../../src/app/shared-service/store-service/store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service_point_services_point_service_service__ = __webpack_require__("../../../../../src/app/shared-service/point-services/point-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoreTransactionDetailComponent = /** @class */ (function () {
    function StoreTransactionDetailComponent(_storeService, _pointService, _datePipe) {
        this._storeService = _storeService;
        this._pointService = _pointService;
        this._datePipe = _datePipe;
        this.storeList = [];
        this.storeTransaction = [];
        this.storeInfo = {
            id: null,
            storeName: "",
            contactName: "",
            email: "",
            address: "",
            contactNo: 0,
            points: {
                id: null,
                totalPoints: null
            },
            totalPoints: null,
            pointsSpend: 0,
            networkGroup: {
                groupId: null,
                groupName: "",
                contactNo: null,
                address: "",
                detail: "",
            },
            loyalty: {
                id: null,
                loyalty: 0,
                active: false,
                date: null,
                changeLoyalty: 0,
                changeDate: null
            }
        };
        // Filter By Date
        this.startDate = "2018-00-00";
        this.currentDate = new Date();
        this.endDate = this._datePipe.transform(this.currentDate, "yyyy-MM-dd");
        this.showTable = false;
    }
    StoreTransactionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._storeService.getStores().subscribe(function (data) {
            _this.storeList = data;
        });
    };
    StoreTransactionDetailComponent.prototype.onChange = function (value) {
        var _this = this;
        this.storeName = value.storeName;
        this._storeService.getStoreByStoreName(this.storeName).subscribe(function (data) {
            _this.storeInfo = data;
            _this.showTable = false;
        });
    };
    StoreTransactionDetailComponent.prototype.viewTransaction = function () {
        var _this = this;
        console.log(this.endDate);
        this.showTable = false;
        this._pointService.getStoreTransactionByDateFilter(this.storeInfo.id, this.startDate, this.endDate).subscribe(function (data) {
            _this.storeTransaction = data;
            _this._storeService.getStore(_this.storeInfo.id).subscribe(function (store) {
                _this.showTable = true;
                setTimeout(function () {
                    $(document).ready(function () {
                        $('#pagination').DataTable({
                            "dom": '<"top"Bfl>rt<"bottom"ip>',
                            "buttons": [
                                {
                                    "extend": 'pdf',
                                    "text": 'Export', "className": 'btn btn-default btn-xs',
                                    title: 'Transaction of ' + store.storeName,
                                    customize: function (doc) {
                                        doc.content.splice(1, 0, {
                                            margin: [0, 0, 0, 1],
                                            alignment: 'center',
                                            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARoAAACzCAMAAABhCSMaAAAA7VBMVEX///8hXov///3//v8gX4uCgoL8//9+fn6AgID6///+/fwUVH4PUn7///zr9vykwNLn9fYgXYzv7+/Z2dnz/f8ZWoedt8ba6fAhX46UlJRoiaAATHe8zNSHh4fw+/55eXnBwcG0tLTl5eWwytoASnO9vb2wsLCgoKCOjo7S0tLs7OwoXYTE2uSioqJ3lq6TsMIkWoBcgp5QeJQ8aYzN4eyKqL15nLW50N4AQ3RJeJxAbY3S6O5Xg6WLpbFsk6vI3ONkg5mesr3C0Nd7nruJrccfVHYQSWwAQGl9laQPUYLg9f51kKSYsLxhi6wuYYLWHUfgAAAWLklEQVR4nO1dCWPauBKWhVGwbANuETjQOO2SNm1Jwx1eyC7dq2/X6W7+/895MyPJB6R9eyRNSzxpmkRc9scc3xwyjFVSSSWVVFJJJZVUUkkllVRSSSWVVFJJJZVUUkkllVRSybcp/KEPoJJvUjhnEr5rDP9VUhQuWa/JhHzo4/gKRbLFZNrkFTS3yGKk1LT50Efx1UkYgs5EjqumCdhUFa5y4YQMQOP6sw465EpYRmgQmdhxnDidJqGAKFWFKSPgZ1wAxnXdOOgnFQE0IsGaRmBMDgr8r/pJyHmlNWA6IeuNVKSRcZzIQb2p1EbL4kY5RmmcyHWjOPiziuGUHoCfsbZkfsYYw2tw02NWHuIzYE1Rho32xmBTAojxo4TGnDR64NzPKIW+huwqmHb4I+U39qytNQEakf/r1HeM/kRq2nmcSoPCZY10xroYv8uaU2U1yAmmCZfycWabcNoWGRe+/BaQ4ObUj13tdCK/j9g89FE+iEBsmiukepg7oc5wcLzNmQJGDAuoN5vkoY/xoYT4jHYuyu8KSYlTcxrE2qJiB/TmoY/xAQQspXdjrclxJ12PY+UT/mte+qAzpDauAr2pyUeUM+Cp8qIHdtRlUuP2xub3KrbOGPXmsdREs3gM1hRnhMZR5yK7B2+ufXBAqEwx8OJOKPTyQxzuQ8gV8JkMGHS55565RaAvTmNNdVzkfiEuPw4CWIjaEdVo8Ee6ETy0Z9+cgb/RVhWlkE89ClhQAJmbiIwJQUGSBz+j4KKTQYP+hpQqQn4Defij4TfAZ+LY1fbkj4e+samLju3Ohfx6piB6a8pDcephj/hLCLrUxZxqekTs/JbHhn6UYUN+hUlO3M8QZdffPIbalggzPhPB/8D0gAIDNm4cgVu5KKTbEKew5EfwKOR+xqb2T3/ojGusXO0EnUESLFYTBApy74vEQgMxfAZmpzPPCHIGHu4fKFpsHRx1xjI6fwwcWMoa6M1Eh/LgwsZwLvn1pcrKW8Gms4f6ogXPSyIyhUonWFONVjnaVEwQXAhDC0F9rtHfuJQ2xH7f2+caBUcOnGUHzugMQhEgQ/AMfeWi90nPPVg0ZtVcK5NOYf2ms7/0hrMrW4XQznW0YjYDAGw+uBS4gl8SA42uUegOlevEKeZT+2pVwGcKuQGwvdFKaEVAUwF/Q4ilmb8BwK5nmvVgsA/2t0YBHtj2KNF0IPoosClWC2k0IhTDiUKOF/m/dLjmN4z4TeTqEoUD3I8LWdu3mrFkvXkWcJS69OlXxIZLMh/JARsIXq4bpctOPoLUvAQnpLGJ/fPO/tUoahnTQyfjd5Nz3838jTSkB2xKuYgN8GKrGehvfNsRjzCGi8+8zDcpvYKfCcYeSzYBQgMwLRiRuRoaCugNxmrgxRYAHPFDf+Na7uftj9bUSCt6c6MzSFEAGc47/YDMhGzKpNaATYCG47rBBdMLKMD9sBdOT5BuIIbvT02UozVZzu8MxkJ6Igy9vtLYTIDfmBgO/sZHkgfYnLNCjWKtYsOhY7QptjeaI7KMEssvY+qq8DDsbCCBjCIXsCHzwZFhtCmKU276i4nhnPyNhdaN96oHU/AzkfoVVAMpcA1sahMAWCOyKfI3klPOQJwwzvMpsDbQGwI2Jl+c7MVokgwtMrqeqf5scp0mATZJP6XgE1Gc0laC2Ciq5QQUww0GmGsa8henm6SYTvHbiur/KKn4soRJ5h5YV4L9acLAjcIXDznGcGzkot4YFGrco1wzojyc20PmzUvjhfA5+gnPmM9t5/PJIjv//wWfe9fH7NhQZ2y1E8wEYJiaeqYArpdsTgYgJyf//Znr/lSNSTH8Ly6dDH77Pa9RhNdrWNN3Pvntx2YZmhyKz7/zn73V4vZFlIez63mB6FN/2zG5UEhMJmlboQdIrN9wkS3m6ZRknXZB9A2c70zu61kuVBv4F95+lp84d3J1Xyb6SV7s3jr+L3NqH+BMOZzRbYeAhKVclKnRHW8xHv3+0izFFjwIC61yU2ou3YiHRSLKY+2iJimbg/V/dLJ/TzTTs9XvYMnOzKBR8GdCvX9evjcrGnoJBblzx+wPvjNpwmsyNDTptkAGLo5UquiPcMF2Aj+haXcsW9mBZGc3LuWK6bSJ55MNMmYZk5SWF7OtJVmzEJjzxXXhJUnSKb2mTsy93qrVHS6S2zTAS9qLRa/d8cogJ4tht7vqddi9EwNpYxM5mCgYC1TXsxuyKZoNlkTxSMwPeXh0VH9VWAA5PTo6OoWfTxtH9ed0J3MD3Pe1bH4YfWhl96VcDF6lPV6fBCCDD5szj0mjEXBIAjDrTkcn6Msns+WZQU5y7/355MTHh8yXPXG/5URuano6aLv+2KSFZyNd0wz6TSa3A+WT1/V6/Si3D/jtyTEsHeLSIfzyJL/vm4P6wRvW9J0gg8YA7XUnCiQI4OXVoN/DNEQ/HRdnUx+W8eYoUulvqHACqFe7P4ClNE1hPZ2MqSZyj/jkvQOITWNP+0qwqdGI+m6492nLnNiTI0Dm4GnxWZ4f1I/qr/Gx3x3XGy/zG+CuoExFaLTz4J3zQRQF/fFq2O1D0pHevGe6yCN5ZxkoyPXn048fP07XfjDFLphR7+DmY2s1/GHmK3jbqCZyb9BoP6OhUX92TOARUusNKtJuPfMJKEi9/q64dFg/el0/eoIK9K5Rb2RqA0rT+K4MjRbvPHCC6QKDuxC9fuCoec+492QKf02WC4r8XtL74xmu6iEof9kkRems5oiNuC9cuCzGJvg3ahX4wmKiaFxP75krhpfvDuovCIh8pdHIVt42jkBtjDM+qjfQKZWgwdqG6AZRcJ4P1i5TR810D6szhZumvZ2D7cyU469I6/BR7Zlyg/E9VRM1MnEWnNw48lssM1+BeoOjI5ne2PP47qDx4kUDXEh2WPDX09f1Aw3WiwP7G3ve0KpU1hogQb0THDnm2bvubUAJugzfAkAJUo9wJ2h1A7xHXlZs3yhn0rsP7ofRs7fGnV9uNhMMeXR+AiE7m1Dm5KT98j6Npwf1V/B9mi1I8CigIMcakCdGVWi98ZztQlNjfRVPrrgUzAzGhc2bSN1g2fR9AHoK/Hj7jNsjJ5rlvDnEnpijzu+JFZOfMeVcpXSeEAzpJjgCz/ib3f7Jm4PGS3lcCERPG4AFaM13+k/wyRolUJrXbBcazponLpxVrYbnVePEKruBG6wYR/WZtMHkLAaWcrZSZ3BGFWfdEePCW6to1NxVr38uptlGHJhCE/YH/F+Xge7KDVqCWD3dF7GJgPylm4TbqnkNTh2cyWH94Ll9yldgT7BwbIKWfK3VBtTnWKNVhkbieQZnpYNiPR/RCq99J1ruRh3uTVV044WlUN0FI1zdBSRbr5UxPRR/LNjSxyAeO/6woKTIi9Eb+ZRPGQHP8hw1wloUBnMMUuB9GNn+Gx2kXh7YMLYNzUapeTnwkZe98VgriAeL7YMFzWkDk1my8hjGAizqFhj/rQhEJjbTZv5SwPty4ccEFc7aW94L/kahL3KzvZbwvpELfgv85a2+F0RoUJJ3BhrE5rDeeIGIWXe8bVBzBf6kKID7Dyo+SdhSRfPdyim8kSnaOi9aD/cmjurfER4F0VFbVyEgbwrxfVtSJ8lFveG2k4u+OMblFPcT6tV3CE3Bok4baDfvGo3n9tnBSR/J5wcHlvttQZOMXHVROhx4IQjngysxi6KpYeQFBxuyodamoopwto7U7G67OhAYLJ9BPQmWukonvWWgBz0hhucttjOzxQdiuNRcHvQDvMrLRoMyAyAy5GxfNQos+BS8zes8mdiifL2JjtS5gKGs0nhw5s1d9VG/tAzFz8+MCAzdJ+3yaXA2VWp9t8V5KbSfiUAcBdlBqNPo0FtSlw35jZe/P2c3OrT7/SZ5aDhvdLiQEeiQRF4ZPZAJ2ShvMac6fmP/3IEmUmVyDO8WQBOceTdK/S5MdVHMUi3/EeyPINqFpg/Q3PX+z4+Bnu2E73iUMAONZNdzXdhVH3rW4QFgv+CYJ3jjwU80HSIPCRP8gZDAz2N0OiVoQIcoeTJWsas16Xj7mIYQnRfe3FEbozWSrdMUsk/XHQhxKzSgNTNv+3n+naDLNa0DBwj6NaOSWch7ECUImfU1RWkOBoRmZlrgLSqMY2wmLCAAHTJSkEOE4PlBMa16e6AT0Nug4U3IZC/KZE2ysXJOriFGA0vWhR/OyJgulDNg4hlkD3nkMrXhtVI/3ikumIN0zoNsIk3N2njCIU6e6YW1yWCw0uaNfRPgu8b9PDG8961mdi8b2h0/L/JjrFIUcvPt4D2CNKEEjQjFuXI/dBgAMWqXEuph4KYMSDIy9VopQnVA+c7vMHjXMPrUuHfuZ8N6PiaQkNdc6ssiIDIYJeE1BUfXTD0orTN01uBF6H3VMerQ0GII4Yf52X4emn4UzUvmIXnnkgI6ZkolMojQDIDX+BjUSsGbnQX4rHdbI8YCv3eemmoENlbatOMg0xlbLdc6g19wDGFoz/qoLo0JnbIn1o4Amtd/DRoNQInHSraA3GnMwkWKiZERshuChtjwKCkXhJeQivfusJRl3CsPwaZcQ/nQpppmjpPqJigh3BV0JiLwMJxnifexicoQtY8BH8P0smWST0NDFYUBkDXBMrRBHX5Xrn/FEQI4X3jzhOVWGhrWTd10yPTwRY26Y8mNC174Dskw1x0u9DcXgWM2lzrq8pLKoHFeUZLkZ3QzM2gV1Papdr+MWN/TU1PBwirOwV/VGgi7WHuRJvmQPLwC0t/34KhWARyMJzPQLDTNESRR2agTxq8/VAwE+a6bLsRrOfpi28p1dIEYkTFjMehnfCqCRoBM4QDeZNCARb2yBQiMVMd/ERrJewN4E9rmpbCvdwlYLbC5gjEKQWJWwTU0EMHACDNTw+qFH6m1x++heI6JNPob44ypMuOqUcF2xTjQ+6AKfgYFEksTpd8Cr6s3nlowjg7eZnf6LDTwGuM0D4RY81TIdGi2qQfZvj/TN+GxDAMI3rwmOmuFxN0+5Ay06ORqu1V4VwJhwfT59ViNjk34ZoWc/IxpZ5aJK0DTsAQG2wfW94I/NiUI+msbGvVrL5eQiQ243aDVAW0UnSGcZtD3zNZW7BBGg82zdsfzvE7vQkUDGnrC0dRg9p4qxk1wgmowvJ+aOc10iE4ew8HPrK/s8ILkYqxZYaS6W4QTaO8L+oViVP2FWZZHRTB2oIl9nBEYpPjf2iNrBjwm0x9+2Nz4OPpm2+M4FYgdhWAwurycTwYqjv4jQgmurzdPnSiYb35Yfh/4OM7M7qVsbiZBkN9kxWF1iU0nrvnMONAzNbjhp/zQVwcHFponBw1b2mOymDQhNMcFaAJVFHCzwLJba19FKk2jSAXrZ+jMSGvAQrzhDPtQ1IhSgT/vQyoTwmEkF76PjSgFj/P7ve0u+l2Cg61jbxPYoVYHmwc1HKkBnRmQm3GCMdu+ytzL09OsMPPylVUaJl+9Oy1Ac/ruNDev5Md+UX73aAqgPezPJyeDyXqz6pg8jqGDhZu8q/Hm+8v5fDY9H78Hdx3igBig11vORv7AH82W7wU2O++puUtnHKJmR26GDRyGMFHb8pn7EWLlrN3rXfWS2/tsXtJudnZCc6d9ddVr5w30+zIpGkbQMdw1OUOCU59jX+9H9Vt3zBpKIhlFXvou36Ln2kMar+B2QT+Gh2F5euKeDo6T28v4DTbkZk1GfIZ2YrS8O5vVuHWwgaN3pTmi0mWlqIsgADeZ7dazN0kjd3RUnxWda6bZRjg16xg+A0wvn7bD3U+IYxEpye20TXakenSAvrUyfH5CjS60JQuzGFvPjirCyh5Fq9kXmSyl8Z4OsAzbXlBYAcS6TU7SCmPjepRKL+0MU+GAUXlR3FtX+osIdp3EeWB7mLHe7OOYIih+h2wx7pL88XMhYiYtvdj9yTQOyAmcdXP5qfmtX0QVTsgr+Bu99bQrsnjKFvPAh680BU+UqVByPgh8H1b9VX4VDjbEySCfvtSgJXbH9L4h4dqLdM5Ts0HMtYP4JgNn7GqtVSr9vjBsA0Q6pkmK0VDvWaV4svIz7VOTltiDazYDyUtM/UYXgsdMT/GhLEz/IdVjSDWKIDbkR6OVoLY+88CvDJWucyBm/nAPLi2Ls6Z0stlINV5Ujhl0FqYD7M+apgwO56s3LqB6rWx8Ag1ZTeyVMB0FnOjbVxkUSdwvz6f8WWLau7RLFTc6IVPWhALC/cbQREAm1IUBMMzhSGW82h8K/qUmn+9dtL/J6n50gU9zrSzIstADo0iaxNwQ9aGZEzImWauFoDN27wYNFeyL6E3bnU3mRR3/e9xg0JsoCuXBtJlpgDDhLCJrkuR8yM+orC422B9kmCZzpkZBYLgB6M1iFMVuFEfqsrAJt6NJkKvQmuzggFj5mRePSoMoeyCQsAju5b27OOiv1or2WNKIrJ0vT7BN47pUSwqFBkywlTKdYmyjD/fpAkiWrlCcck3TV2ExHXJwsCYM2pz8TKKjtuuOhubyHEJfbMKEJlCmvbImAw2XNQFhOb+qGm5ZpgqXHXkR2KIhDIDPhOYxELXzK3u7k5adXtwjMbx4k9VvKNpgnULYM80KGKAaodRJA8SmkdlLpatfO6P737zozp3gWm9sqCKdkVRCydvBGJtCWTMdxiw24XR6CznSvkGjhYcs6QeR5TfO6JrOFdvgobdJy8FZcuLAWcSPtqat9kk41Ylw33uWTmEtXd8I4QvHQd1osqKWOJXpwJr0Ngc76ravQu5GctFPLTTIbwTl1nYoB4NzqP0JML2VqbA7etIk3J+ovS1mT47X1zDgp9dg7JZSMz3q/g61zhSqEOiFIz239Y3Xrj4p2VCs8DK90RcwDylqIwSgMzWhm58Qm/zc9CZ7bE2Z0BxFP6tRoE15pmShJqgz0uwdQGTs+HFhFHufRRtQ5m8cf3qhUyTKKGuWAK4m9spqhMwe1PT+koQ86fua3rj6cyWI6Zk5My5qMtv1HFE372EP90sKzm31SVXya/RFyGd0monI5FUItcd8Zle4kCFg4xQE+YzptNYwalMeqvsPrf2qQnxeBM5RgC8uQINRW9g9veSBtf+JVHdnnmJ/xW65Tvoqn6O4TIj10EV/VqP8kgL3OzXwdQrWRAt649OFW6hxtSpnlI9O6Pop+vpzGfejYQWxynsHFLUf+ki/uOjBCMTGNdcXC/SF71cjs4sVq52te764w1crcNrNfl4RpwuYF/zMLbN+j0XI7ybFD4TadMweZ61G3cfngbXo0SDemWb+xvUv57p5oLc+P6KovSU6WhM2pvwbRdl1DR2/myXrj05Mo4HjRTCyD/bJg/ljyg5uF1OjKH7opatncCrB1mXG/awLVi1vj3qU/0YgZwicbAMVfZRhJXavRzJN84/RelRViE8LdbZrPIvheOHPfZm5+tdC/QPBMmxw2rqCRou+KirqDQ1joTXtZ/P2b4uGAefSp8pxVeVnyqI/uTuZBvTRP5WUBYclkn73sVYhPi9cit3tW5WQ1B7HR1v+beH6CskPfRhfo9BmqCpo3yq37JOsJJcKmkoqqaSSSiqppJJKKqmkkkoqqaSSSiqppJJKKqlkH+V/+PjGr6Z1f0oAAAAASUVORK5CYII='
                                        });
                                    }
                                },
                                {
                                    "extend": 'print',
                                    customize: function (win) {
                                        $(win.document.body)
                                            .css('font-size', '10pt')
                                            .prepend('<img src="http://itbridgenepal.com/wp-content/uploads/2018/04/ITBRIDGE-FINAL-LOGO-copy.png" class="report-title" />');
                                        $(win.document.body).find('table')
                                            .addClass('compact')
                                            .css('font-size', 'inherit');
                                    },
                                    "text": 'Print', "className": 'btn btn-default btn-xs',
                                    title: 'Transaction of ' + store.storeName,
                                },
                            ],
                            "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
                        });
                    });
                }, 250);
            });
        });
    };
    StoreTransactionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-store-transaction-detail',
            template: __webpack_require__("../../../../../src/app/components/store/store-transaction-detail/store-transaction-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/store/store-transaction-detail/store-transaction-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service_store_service_store_service__["a" /* StoreService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_service_point_services_point_service_service__["a" /* PointServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
    ], StoreTransactionDetailComponent);
    return StoreTransactionDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/backend-base-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendBaseService; });
var BackendBaseService = /** @class */ (function () {
    function BackendBaseService() {
    }
    BackendBaseService.baseURL = 'http://localhost:8081/api/v1';
    return BackendBaseService;
}());



/***/ }),

/***/ "../../../../../src/app/model/network-group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkGroup; });
var NetworkGroup = /** @class */ (function () {
    function NetworkGroup(groupId, groupName, address, contactNo, detail, store, points) {
        this.groupId = groupId;
        this.groupName = groupName;
        this.address = address;
        this.contactNo = contactNo;
        this.detail = detail;
        this.store = store;
        this.points = points;
    }
    return NetworkGroup;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/advertisement/advertisement.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertisementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdvertisementService = /** @class */ (function () {
    function AdvertisementService(_http, customRequestOptionService) {
        this._http = _http;
        this.customRequestOptionService = customRequestOptionService;
    }
    AdvertisementService.prototype.addAdvertisement = function (advertisement) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/ad', JSON.stringify(advertisement), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    AdvertisementService.prototype.updateAdvertisement = function (advertisement) {
        return this._http.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/ad', JSON.stringify(advertisement), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    AdvertisementService.prototype.deleteAdvertisement = function (id) {
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/ad/' + id, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    AdvertisementService.prototype.getAllAdvertisement = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/ad', this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    AdvertisementService.prototype.getAllAdvertisementImage = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/advertisementImages', this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    AdvertisementService.prototype.getAdvertisementById = function (id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl + '/ad/' + id, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    AdvertisementService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || "SERVER_ERROR");
    };
    AdvertisementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__custom_request_option_service__["a" /* CustomRequestOptionService */]])
    ], AdvertisementService);
    return AdvertisementService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic c3RvcmUtcmVhZC13cml0ZS1jbGllbnQ6c3RvcmUtcmVhZC13cml0ZS1jbGllbnQxMjM0'
        });
    }
    AuthenticationService.prototype.login = function (username, password, grant_type, client_id) {
        var _this = this;
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('grant_type', grant_type);
        urlSearchParams.append('client_id', client_id);
        var body = urlSearchParams.toString();
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].authUrl, body, { headers: this.headers })
            .map(function (response) {
            // login successful if there's a token in the response
            var token = response.json();
            if (token) {
                // store username and token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                _this.isLoggedIn = true;
                // return true to indicate successful login
                return _this.isLoggedIn;
            }
            else {
                // return false to indicate failed login
                return _this.isLoggedIn;
            }
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser.token.access_token;
        return token ? token : "";
    };
    AuthenticationService.prototype.getTokenAndUserName = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return currentUser.username;
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/custom-request-option.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRequestOptionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared-service/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomRequestOptionService = /** @class */ (function () {
    function CustomRequestOptionService(authentictionService) {
        this.authentictionService = authentictionService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.authentictionService.getToken()
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    CustomRequestOptionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_authentication_service__["a" /* AuthenticationService */]])
    ], CustomRequestOptionService);
    return CustomRequestOptionService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/customer-registration/customer-registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerRegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomerRegistrationService = /** @class */ (function () {
    function CustomerRegistrationService(_http, customRequestOptionService) {
        this._http = _http;
        this.customRequestOptionService = customRequestOptionService;
    }
    CustomerRegistrationService.prototype.saveCustomerRegistration = function (cusRegistration) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/group', JSON.stringify(cusRegistration), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    CustomerRegistrationService.prototype.getCustomerRegistration = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/customer/register', this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    CustomerRegistrationService.prototype.deleteCusRegistration = function (id) {
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/customer/register/' + id, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    CustomerRegistrationService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || "SERVER ERROR");
    };
    CustomerRegistrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__custom_request_option_service__["a" /* CustomRequestOptionService */]])
    ], CustomerRegistrationService);
    return CustomerRegistrationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/customer-services/customer-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomerServiceService = /** @class */ (function () {
    function CustomerServiceService(_http, customRequestOptionService) {
        this._http = _http;
        this.customRequestOptionService = customRequestOptionService;
    }
    CustomerServiceService.prototype.getCustomers = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/customer', this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    CustomerServiceService.prototype.getCustomer = function (id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/customer/' + id, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    CustomerServiceService.prototype.deleteCustomers = function (id) {
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/customer/' + id, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    CustomerServiceService.prototype.createCustomers = function (customer) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/customer', JSON.stringify(customer), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    CustomerServiceService.prototype.updateCustomers = function (customer) {
        return this._http.put(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/customer', JSON.stringify(customer), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            ._catch(this.errorHandler);
    };
    CustomerServiceService.prototype.checkMobileNo = function (mobileNo) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].baseUrl + '/customers/' + mobileNo, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            ._catch(this.errorHandler);
    };
    CustomerServiceService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    CustomerServiceService.prototype.getter = function () {
        return this.customer;
    };
    CustomerServiceService.prototype.setter = function (customer) {
        this.customer = customer;
    };
    CustomerServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__custom_request_option_service__["a" /* CustomRequestOptionService */]])
    ], CustomerServiceService);
    return CustomerServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/group-service/network-group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkGroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NetworkGroupService = /** @class */ (function () {
    function NetworkGroupService(_http, customRequestOptionService) {
        this._http = _http;
        this.customRequestOptionService = customRequestOptionService;
    }
    NetworkGroupService.prototype.addGroup = function (networkGroup) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/group', JSON.stringify(networkGroup), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    NetworkGroupService.prototype.updateGroup = function (networkGroup) {
        return this._http.put(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/group', JSON.stringify(networkGroup), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    NetworkGroupService.prototype.deleteGroup = function (id) {
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/group/' + id, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    NetworkGroupService.prototype.getGroup = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/group', this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    NetworkGroupService.prototype.getGroupById = function (id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/group/' + id, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    NetworkGroupService.prototype.getGroupByName = function (name) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/groups/' + name, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    NetworkGroupService.prototype.getGroupNames = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/group/group_names', this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    NetworkGroupService.prototype.setter = function (networkGroup) {
        this.networkGroup = networkGroup;
    };
    NetworkGroupService.prototype.getter = function () {
        return this.networkGroup;
    };
    NetworkGroupService.prototype.errorHandler = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || "SERVER ERROR");
    };
    NetworkGroupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__["a" /* CustomRequestOptionService */]])
    ], NetworkGroupService);
    return NetworkGroupService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/loyalty/loyalty-update.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoyaltyUpdateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoyaltyUpdateService = /** @class */ (function () {
    function LoyaltyUpdateService(_http, customRequestOptionService) {
        this._http = _http;
        this.customRequestOptionService = customRequestOptionService;
    }
    LoyaltyUpdateService.prototype.updateLoyalty = function (loyalty) {
        return this._http.put(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/loyalty', JSON.stringify(loyalty), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    LoyaltyUpdateService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || "SERVER ERROR");
    };
    LoyaltyUpdateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__["a" /* CustomRequestOptionService */]])
    ], LoyaltyUpdateService);
    return LoyaltyUpdateService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/point-services/point-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PointServiceService = /** @class */ (function () {
    function PointServiceService(_http, customRequestOptionService) {
        this._http = _http;
        this.customRequestOptionService = customRequestOptionService;
    }
    PointServiceService.prototype.transferPoints = function (transferpoint) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/transferpoints', JSON.stringify(transferpoint), this.customRequestOptionService).map(function (response) { })
            ._catch(this.errorHandler);
    };
    PointServiceService.prototype.customerBuyTransaction = function (customerBuyTransaction) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/customer_buy_transaction', JSON.stringify(customerBuyTransaction), this.customRequestOptionService).map(function (response) { })
            ._catch(this.errorHandler);
    };
    PointServiceService.prototype.getCustomerTransaction = function (customerId) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/customer_transaction/' + customerId, this.customRequestOptionService).map(function (response) { return response.json(); })
            ._catch(this.errorHandler);
    };
    // getStoreTransaction(storeId: Number) {
    //   return this._http.get(environment.baseUrl + '/store_transaction/' + storeId, this.customRequestOptionService).map((response: Response) => response.json())
    //     ._catch(this.errorHandler);
    // }
    PointServiceService.prototype.getStoreTransactionByDateFilter = function (storeId, startDate, endDate) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/store_transaction/' + storeId + '/' + startDate + '/' + endDate, this.customRequestOptionService).map(function (response) { return response.json(); })
            ._catch(this.errorHandler);
    };
    PointServiceService.prototype.addPointToStore = function (points) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/store_point_add', JSON.stringify(points), this.customRequestOptionService).map(function (response) { })
            ._catch(this.errorHandler);
    };
    PointServiceService.prototype.getGroupTransaction = function (groupId) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/group_transaction/' + groupId, this.customRequestOptionService).map(function (response) { return response.json(); })
            ._catch(this.errorHandler);
    };
    PointServiceService.prototype.addPointToGroup = function (points) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/group_point_add', JSON.stringify(points), this.customRequestOptionService).map(function (response) { })
            ._catch(this.errorHandler);
    };
    PointServiceService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    PointServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__["a" /* CustomRequestOptionService */]])
    ], PointServiceService);
    return PointServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/store-service/store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StoreService = /** @class */ (function () {
    function StoreService(_http, customRequestOptionService) {
        this._http = _http;
        this.customRequestOptionService = customRequestOptionService;
    }
    StoreService.prototype.getStores = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/store', this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StoreService.prototype.getStore = function (id) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/store/' + id, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StoreService.prototype.deleteStore = function (id) {
        return this._http.delete(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/store/' + id, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StoreService.prototype.createStore = function (store) {
        return this._http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/store', JSON.stringify(store), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StoreService.prototype.updateStore = function (store) {
        return this._http.put(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/store', JSON.stringify(store), this.customRequestOptionService.options).map(function (response) { return response.json(); })
            ._catch(this.errorHandler);
    };
    StoreService.prototype.getStoreByGroupId = function (groupId) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/store/group/' + groupId, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StoreService.prototype.getStoreByStoreName = function (storeName) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/stores/' + storeName, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StoreService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || "SERVER ERROR");
    };
    StoreService.prototype.getStoreByTopSpender = function () {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/store/top-spender', this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    StoreService.prototype.getter = function () {
        return this.store;
    };
    StoreService.prototype.setter = function (store) {
        this.store = store;
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__["a" /* CustomRequestOptionService */]])
    ], StoreService);
    return StoreService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/upload-file/upload-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_backend_base_service__ = __webpack_require__("../../../../../src/app/model/backend-base-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UploadFileService = /** @class */ (function () {
    function UploadFileService(http, customRequestOptionService) {
        this.http = http;
        this.customRequestOptionService = customRequestOptionService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    UploadFileService.prototype.pushFileToStorage = function (file) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("file", file, file.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", __WEBPACK_IMPORTED_MODULE_5__model_backend_base_service__["a" /* BackendBaseService */].baseURL + "/fileUpload", true);
            xhr.send(formData);
        }));
    };
    UploadFileService.prototype.uploadCustomerImage = function (file) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].fromPromise(new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            formData.append("file", file, file.name);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", __WEBPACK_IMPORTED_MODULE_5__model_backend_base_service__["a" /* BackendBaseService */].baseURL + "/customer/image", true);
            xhr.send(formData);
        }));
    };
    UploadFileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__["a" /* CustomRequestOptionService */]])
    ], UploadFileService);
    return UploadFileService;
}());



/***/ }),

/***/ "../../../../../src/app/shared-service/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__ = __webpack_require__("../../../../../src/app/shared-service/custom-request-option.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserService = /** @class */ (function () {
    function UserService(_http, customRequestOptionService) {
        this._http = _http;
        this.customRequestOptionService = customRequestOptionService;
    }
    UserService.prototype.getRole = function (username) {
        return this._http.get(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].baseUrl + '/roles/' + username, this.customRequestOptionService.options).map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    UserService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error || "SERVER ERROR");
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__custom_request_option_service__["a" /* CustomRequestOptionService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    authUrl: 'http://localhost:8080/oauth/token',
    baseUrl: "http://localhost:8080/api/v1"
    // authUrl:'http://kwikercard.com/oauth/token',
    // baseUrl:"http://kwikercard.com/api/v1"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
import { Component, OnInit } from "@angular/core";
import { IProduct } from './product';
import { ProductService } from './product.service';



@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})

export class ProductList implements OnInit{
    

    pageTitle : string = 'Product Listing Page' ;
    imageWidth: number = 50;
    imageHeight: number = 50;
    isShowImage : boolean = false;
    _listFilter : string ;
    filteredProducts : IProduct[];
    errorMessage: string;

    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string)  {
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
    }
    products : IProduct[];


    toggleImage() : void {
        this.isShowImage = !this.isShowImage;
    }

    performFilter(keyword: string): IProduct[] {
        keyword = keyword.toLocaleLowerCase();
        return this.products.filter((product:IProduct) => 
                                product.productName.toLocaleLowerCase().indexOf(keyword) !== -1 );
    }
    constructor( private productService : ProductService){
        
        
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage= err
        })
        
    }

    onRatingClicked (message: string) : void{
        this.pageTitle = 'Product Listing Page' + message;
    } 
}

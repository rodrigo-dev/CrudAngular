import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
    product : Product
    
  constructor(private service : ProductService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.readById(id).subscribe(res =>{
      this.product = res
    })
  }
  deleteProduct() : void{
    const id = this.route.snapshot.paramMap.get('id')
    this.service.delete(this.product.id).subscribe(()=>{
      this.service.showMenssage('produto excluido com sucesso.')
      this.router.navigate(['/products'])
    })
  }
  cancel() : void{
    this.router.navigate(['/products'])
  }
}

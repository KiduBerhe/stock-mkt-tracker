import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyStock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public stock: CompanyStock;
  public stocks: CompanyStock[];
  public editStock: CompanyStock;
  public deleteStock: CompanyStock;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getStocks();
  }

  public getStocks(): void {
    this.stockService.getStocks().subscribe({
      next: response => {
        this.stocks = response;
        console.log(this.stocks);
      },
      error: error => {
        alert(error.message);
      }
    });
  }

  public onAddStock(addForm: NgForm): void {
    document.getElementById('add-stock-form').click();
    this.stockService.addStock(addForm.value)
      .subscribe({
        next: response => {
          console.log(response);
          this.getStocks();
          addForm.reset();
        },
        error: error => {
          alert(error.message);
          addForm.reset();
        }
      });
  }

  public onUpdateStock(stock: CompanyStock): void {
    this.stockService.updateStock(stock).subscribe({
      next: response => {
        console.log(response);
        this.getStocks();
      },
      error: error => {
        alert(error.message);
      }
    });
  }

  public onDeleteStock(id: number): void {
    this.stockService.deleteStock(id).subscribe({
      next: response => {
        console.log(response);
        this.getStocks();
      },
      error: error => {
        alert(error.message);
      }
    });
  }

  public searchStocks(key: string): void {
    //     console.log(key);
    //     const results: CompanyStock[] = [];
    //     for (const stock of this.stocks) {
    //       if (stock.companyName.toLowerCase().indexOf(key.toLowerCase()) !== -1
    //         || stock.tickerSymbol.toLowerCase().indexOf(key.toLowerCase()) !== -1
    //       ) {
    //         results.push(stock);
    //       }
    //     }
    //   }
    //     this.stocks = results;
    // if (results.length === 0 || !key) {
    //   this.getCompanyStocks();
    // }
  }

  public onOpenModal(stock: CompanyStock, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addStockModal');
    }
    if (mode === 'edit') {
      this.editStock = stock;
      button.setAttribute('data-target', '#updateStockModal');
    }
    if (mode === 'delete') {
      this.deleteStock = stock;
      button.setAttribute('data-target', '#deleteStockModal');
    }
    container?.appendChild(button);
    button.click();
  }
}



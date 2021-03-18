import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Cardetail } from 'src/app/models/cardetail';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Cardetail[] = [];
  dataLoaded = false;


  constructor(private carService:CarService,private activatedRoute:ActivatedRoute, private carImageService:CarimageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarDetailsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarDetailsByColor(params["colorId"])
      }else{
        this.getCars()
      }

    })

  }

  getCars(){
    this.carService.getCarDetails().subscribe((response)=>{
      this.cars = response.data;
      this.dataLoaded =true;
      this.setCarsPreviewImage(this.cars)
    })
  }

  getCarDetailsByBrand(brandId:number){
    this.carService.getCarDetailsByBrand(brandId).subscribe((response)=>{
      this.cars = response.data;
      this.dataLoaded = true;
      this.setCarsPreviewImage(this.cars)
    })
  }

  getCarDetailsByColor(colorId:number){
    this.carService.getCarDetailsByColor(colorId).subscribe((response)=>{
      this.cars = response.data;
      this.dataLoaded = true;
      this.setCarsPreviewImage(this.cars)
    })
  }

  setCarsPreviewImage(cars:Cardetail[]){
    cars.forEach(car => {
      this.carImageService.getCarImagesByCarId(car.carId).subscribe(response=>{
        car.imagePath = "http://localhost:4200/" + response.data[0].imagePath;
      })
    });
  }
     
  
}
// setCarsPreviewImage(cars:Cardetail[]){
//   cars.forEach(car => {
//     this.carImageService.getCarImagesByCarId(car.carId).subscribe(response=>{
//       car.imagePath = response.data[0].imagePath
//     })
//   });
// }
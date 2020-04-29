import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public title: string;
  public pSize: string;
  public color: string;

  constructor() {
    this.title = "Clique sur moi";
    this.pSize = "30px";
  }

  public changeSize(size: string): void {
    this.pSize = size;
  }

  ngOnInit(): void {}
}

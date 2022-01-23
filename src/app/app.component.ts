import { Component, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTreeModule } from '@angular/material/tree';
import { MatDrawer } from '@angular/material/sidenav';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import anime from 'animejs/lib/anime.es';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  panelOpenState = false;
  title = 'PortafolioSegundo';
  showFiller = false;
  Pantalla = 1;
  boton: boolean = true;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    var sBrowser, sUsrAg = navigator.userAgent;
    if (sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Google Chrome";
    } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Apple Safari";
    } else if (sUsrAg.indexOf("Opera") > -1) {
      sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Firefox") > -1) {
      this.Pantalla = 2;
      this.boton = false;
    } else if (sUsrAg.indexOf("MSIE") > -1) {
      sBrowser = "Microsoft Internet Explorer";
    }
    // alert("Usted está utilizando: " + sBrowser);
  }

  refresh(comando) {
    this.Pantalla = comando;
  }

  Empezar() {
    const music = new Audio('../assets/audios/0002651.mp3');
    const Presentacion = document.querySelector('.cuadros');
    const clone = document.querySelector('.clone');
    music.play();

    setTimeout(() => {
      clone.classList.add('block');
      for (var i = 0; i <= 400; i++) {
        let block = clone.cloneNode(true);
        Presentacion.appendChild(block);
      }
      let block = document.querySelectorAll('.block');
      let animation = anime.timeline({
        targets: block,
        easing: 'easeInOutExpo',
        loop: false,
        delay: anime.stagger(5, { start: 1 }),
      })
      animation
        .add({
          scale: 0,
          translateX: function () { return anime.random(360, 2100); },
          translateY: function () { return anime.random(360, -2100); },
          rotate: 0,
          duration: function () { return anime.random(500, 3000); },
        })
        .add({
          scale: 1,
          translateX: 0,
          translateY: 0,
          rotate: 0,
          duration: function () { return anime.random(500, 3000); },
        });
    }, 1000);
    this.boton = false;
    setTimeout(() => {
      this.Pantalla = 2;
    }, 10000);
  }

  toggleMenu() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
  }



}



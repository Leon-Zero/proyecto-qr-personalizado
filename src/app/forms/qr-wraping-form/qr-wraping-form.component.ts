import { Component, OnInit } from '@angular/core';
import { QrValuesService } from 'src/app/servicios/qr-values.service';

@Component({
  selector: 'app-qr-wraping-form',
  templateUrl: './qr-wraping-form.component.html',
  styleUrls: ['./qr-wraping-form.component.css']
})
export class QrWrapingFormComponent implements OnInit {

  setField: number = 0;
  wraping = "not_selection";
  valSize: number = 150;
  wrapingClass = {
    "clasico": [
      { "name": "movil", "atribution": "n/a" },
      { "name": "block_cyan", "atribution": "code PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-label-brick-style_6531889.html?sol=downref&id=bef" },
      { "name": "block_pink", "atribution": "code PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-label-brick-style_6531889.html?sol=downref&id=bef" },
      { "name": "block_violet", "atribution": "code PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-label-brick-style_6531889.html?sol=downref&id=bef" },
      { "name": "ring_salmon", "atribution": "scan PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-label-hangtag-style_6534064.html?sol=downref&id=bef" },
      { "name": "ring_purple", "atribution": "scan PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-label-hangtag-style_6534064.html?sol=downref&id=bef" },
      { "name": "ring_blue", "atribution": "scan PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-label-hangtag-style_6534064.html?sol=downref&id=bef" },
      { "name": "ring_cyan", "atribution": "scan PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-label-hangtag-style_6534064.html?sol=downref&id=bef" },
      { "name": "memo_pink", "atribution": "scan PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-sticky-note-style_6531891.html?sol=downref&id=bef" },
      { "name": "memo_yellow", "atribution": "scan PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-sticky-note-style_6531891.html?sol=downref&id=bef" },
      { "name": "memo_blue", "atribution": "scan PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-sticky-note-style_6531891.html?sol=downref&id=bef" },
      { "name": "memo_cyan", "atribution": "scan PNG Designed By khumbilie from https://pngtree.com/freepng/qr-code-free-download-sticky-note-style_6531891.html?sol=downref&id=bef" }
    ],
    "moderno": [
      { "name": "party", "atribution": "línea de personalidad digital PNG diseñado por 588ku de  https://es.pngtree.com/freepng/digital-border-decoration-business-border-business-picture-frame-qr-code_3932776.html?sol=downref&id=bef" },
      { "name": "neon", "atribution": "" },
      { "name": "scan", "atribution": "simple PNG diseñado por 588ku de  https://es.pngtree.com/freepng/scan-qr-code_5404545.html?sol=downref&id=bef" },
      { "name": "colors", "atribution": "mapa de frontera del código qr PNG diseñado por 588ku de  https://es.pngtree.com/freepng/creative-qr-code-border-illustration_4548881.html?sol=downref&id=bef" },
      { "name": "china", "atribution": "festivo y animado PNG diseñado por 588ku de  https://es.pngtree.com/freepng/chinese-style-plum-blossom-zephyr-round-border-red-plum_3976515.html?sol=downref&id=bef" },
      { "name": "laser", "atribution": "no fumar PNG diseñado por 588ku de https://es.pngtree.com/freepng/technology-sense-qr-code-border_5405419.html?sol=downref&id=bef" },
      { "name": "estambre", "atribution": "imágenes prediseñadas rectángulo PNG diseñado por 588ku de  https://es.pngtree.com/freepng/frame-colored-decoration-colored-rectangular-border-design_3806485.html?sol=downref&id=bef" },
      { "name": "black-ig", "atribution": "instagram PNG diseñado por Pugazh Productions de  https://es.pngtree.com/freepng/dark-mood-instagram-post-frame-viral-photo-editing-png_5593972.html?sol=downref&id=bef" },
      { "name": "twitter", "atribution": "foto PNG diseñado por yahya012 de  https://es.pngtree.com/freepng/social-media-photo-frame-template_5339704.html?sol=downref&id=bef" },
      { "name": "aqua", "atribution": "código qr PNG diseñado por Anna Fillah de  https://es.pngtree.com/freepng/gradient-blue-label-for-qr-code_7586291.html?sol=downref&id=bef" },
      { "name": "pearjam", "atribution": "abstract PNG Designed By 姳久 from https://pngtree.com/freepng/abstract-geometric-colored-fluid-gradient-border_5374805.html?sol=downref&id=bef" },
      { "name": "buble_cyan", "atribution": ""}

    ],
    "animales": [
      { "name": "rabbit", "atribution": "borde morado PNG diseñado por 588ku de  https://es.pngtree.com/freepng/purple-qr-code-border_4685663.html?sol=downref&id=bef" },
      { "name": "ciervo", "atribution": "cartoon PNG Designed By Dr_J from https://pngtree.com/freepng/cartoon-cute-little-animal-avatar-colorful-label-border-photo-frame_6494256.html?sol=downref&id=bef" },
      { "name": "lobo", "atribution": "cartoon PNG Designed By Dr_J from https://pngtree.com/freepng/cartoon-cute-little-animal-avatar-colorful-label-border-photo-frame_6494256.html?sol=downref&id=bef" },
      { "name": "oso_pardo", "atribution": "cartoon PNG Designed By Dr_J from https://pngtree.com/freepng/cartoon-cute-little-animal-avatar-colorful-label-border-photo-frame_6494256.html?sol=downref&id=bef" },
      { "name": "pinguino", "atribution": "cartoon PNG Designed By Dr_J from https://pngtree.com/freepng/cartoon-cute-animal-square-label-border-photo-frame_6494252.html?sol=downref&id=bef" },
      { "name": "pig", "atribution": "cartoon PNG Designed By Dr_J from https://pngtree.com/freepng/cartoon-cute-animal-square-label-border-photo-frame_6494252.html?sol=downref&id=bef" },
      { "name": "dog", "atribution": "cartoon PNG Designed By Dr_J from https://pngtree.com/freepng/cartoon-cute-animal-square-label-border-photo-frame_6494252.html?sol=downref&id=bef" },
      { "name": "mapache", "atribution": "cartoon PNG Designed By Dr_J from https://pngtree.com/freepng/cartoon-cute-animal-square-label-border-photo-frame_6494252.html?sol=downref&id=bef" },
      { "name": "bear", "atribution": "" },
      { "name": "cat", "atribution": "qr code PNG Designed By 588ku from https://pngtree.com/freepng/qr-code-design-vector_5412056.html?sol=downref&id=bef" },

    ],
    "dibujo": [
      { "name": "shop", "atribution": "qr code PNG Designed By 588ku from https://pngtree.com/freepng/creative-qr-code-vector_5412068.html?sol=downref&id=bef" },
      { "name": "dinner", "atribution": "qr code PNG Designed By 588ku from https://pngtree.com/freepng/creative-qr-code-vector_5412068.html?sol=downref&id=bef" },
      { "name": "game", "atribution": "qr code PNG Designed By 588ku from https://pngtree.com/freepng/creative-qr-code-vector_5412068.html?sol=downref&id=bef" },
      { "name": "energy", "atribution": "qr code PNG Designed By 588ku from https://pngtree.com/freepng/qr-code-design-vector_5412056.html?sol=downref&id=bef" },
      { "name": "universe", "atribution": "qr code PNG Designed By 588ku from https://pngtree.com/freepng/qr-code-design-vector_5412056.html?sol=downref&id=bef" },
      { "name": "road", "atribution": "marco PNG diseñado por 千图网 de  https://es.pngtree.com/freepng/itinerary-qr-code-decorative-elements_5748472.html?sol=downref&id=bef" },
      { "name": "park", "atribution": "qr code PNG Designed By 588ku from https://pngtree.com/freepng/road-qr-code-vector_5412077.html?sol=downref&id=bef" },
      { "name": "clipboard", "atribution": "qr code PNG Designed By 588ku from https://pngtree.com/freepng/road-qr-code-vector_5412077.html?sol=downref&id=bef" },
      { "name": "city", "atribution": "qr code PNG Designed By 588ku from https://pngtree.com/freepng/road-qr-code-vector_5412077.html?sol=downref&id=bef" }
    ]
  }

  constructor(public qrService: QrValuesService) { }

  ngOnInit(): void {
    this.qrService.observableWraping.subscribe(response => {
      this.wraping = response;
    });
    this.qrService.observableWidth.subscribe(response => {
      this.valSize = response;
    });
  }

  sendWraping(wraping: string) {
    var calcSize = (this.valSize / 10) + 10;
    this.qrService.sendWraping(wraping);
    this.qrService.sendSizeWrap(calcSize);
  }

  onField(select: number) {
    this.setField = select;
  }

  clearWrap() {
    this.qrService.sendWraping('not_selection');
    this.qrService.sendSizeWrap(15);
  }
}

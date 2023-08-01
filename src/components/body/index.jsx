import CardItem from "../cardItem";

function Body() {
  return (
    <>
      <h1 className="text-danger display-1 fw-bold my-4">Mas Vendidos</h1>
      <div className="row m-3 pb-4">
        <div className="col-3">
          <CardItem
            img="imgs/Mas vendidos/packGamer.jpg"
            title=""
            description="Computadora Desktop 10º INTEL Core i7 - 10105, RAM 16GB, SSD 560GB, HDD 1TB, Windows10 , monitor 24' HD, kit Teclado + Mouse."
            price="s/. 2899.00 PRECIO"
          />
        </div>
        <div className="col-3">
          <CardItem
            img="imgs/Mas vendidos/impresora3D.png"
            title=""
            description="Prusa I3 MK3S Viene con extructor reconstruido, gran cantidad de sensores, cama de calor magnética MK52 con lámina de impresión reemplazable de acero y PEI."
            price="s/. 4080.99 PRECIO"
          />
        </div>
        <div className="col-3">
          <CardItem
            img="imgs/Mas vendidos/audifonos.png"
            title=""
            description="Audífonos Gaming Logitech G G332 Stereo wired-impedancia (Ohmios):39 conector: 3.5mm, ancho:8.17cm, tipo de auricular: over ear, sensibilidad Db:107"
            price="s/. 209.90 PRECIO"
          />
        </div>
        <div className="col-3">
          <CardItem
            img="imgs/Mas vendidos/software.png"
            title=""
            description="Sistema Operativo Windows 11 tiene herramientas fáciles de usar que pueden ayudarlo a optimizar el espacio de su pantalla y maximizar su productividad."
            price="s/. 59.00 PRECIO"
          />
        </div>
      </div>
    </>
  );
}
export default Body;

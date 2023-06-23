const Checkout = ()=>{
    return (
        <div class="formularioCompra">
        <form class="row g-3">
            <div class="col-md-6">
              <label  class="form-label">Nombre y apellido</label>
              <input class="form-control inputPersona"></input>
              <p class="errorInputP"></p>
            </div>
            <div class="col-12">
              <label  class="form-label">Número de tarjeta</label>
              <input type="text" class="form-control inputTarjeta" placeholder="XXXX XXXX XXXX XXXX"></input>
              <p class="errorInputT"></p>
            </div>
            <div class="col-12">
              <label  class="form-label">Número de documento</label>
              <input type="text" class="form-control inputDocumento" placeholder="Ej: 12345678"></input>
              <p class="errorInputD"></p>
            </div>
            <div class="col-md-6">
              <label  class="form-label">CVV</label>
              <input type="text" class="form-control inputCvv" placeholder="Ej: 123"></input>
              <p class="errorInputC"></p>
            </div>
            <div class="col-12">
              <span class="btn btn-primary btnConfirmar">Confirmar Compra</span>
              <p class="errorBtn"></p>
            </div>
          </form>
        </div>
    )
}
export default Checkout
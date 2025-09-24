// Ejercicio 1: Carrito de Compras

// Descripción: Crea una clase Carrito que represente un carrito de compras.

// Propiedades: productos (un array para almacenar los productos).

// Métodos que debes crear:

// agregarProducto(producto): Recibe un objeto producto y lo agrega al carrito.

// eliminarProducto(nombreProducto): Recibe el nombre de un producto y lo elimina del carrito.

// calcularTotal(): Calcula y devuelve el precio total de todos los productos en el carrito.

// aplicarDescuento(porcentaje): Aplica un descuento al total de la compra.


let gondola = [
  {
    producto: 'manteca',
    precio: 32,
  },
  {
    producto: 'Mayonesa',
    precio: 120,
  },
  {
    producto: 'pan',
    precio: 60,
  },
  {
    producto: 'huevos',
    precio: 110,
  },
  {
    producto: 'fideos',
    precio: 130,
  },
  {
    producto: 'fideos',
    precio: 90,
  }
]


class Cart {
  static products = [];
  constructor() { }

  addProducts(...products) {
    return gondola.forEach(pr => {
      if (products.includes(pr.producto)) {
        Cart.products.push(pr);
      }
    })
  }
  removeProducts(...p) {
    return Cart.products.filter(product => {
      return !p.includes(product)
    })
  }
  calcTotal() {
    return Cart.products.reduce((a, b) => {
      return a += b.precio
    }, 0)
  }
  aplicarDescuento(desc) {
    return Math.round(this.calcTotal() * (desc / 100));
  }

}
let persona = new Cart();

console.log(persona.addProducts('manteca', 'pan'))
console.log(persona.calcTotal())
console.log(Cart.products)
console.log(persona.aplicarDescuento(10))




// Ejercicio 2: Cuenta Bancaria

// Descripción: Crea una clase CuentaBancaria para gestionar las operaciones de una cuenta.

// Propiedades: saldo (inicializado en 0), movimientos (un array para registrar las transacciones).

// Métodos que debes crear:

// depositar(cantidad): Agrega una cantidad al saldo y registra el movimiento.

// retirar(cantidad): Resta una cantidad del saldo si hay fondos suficientes y registra el movimiento.

// consultarSaldo(): Devuelve el saldo actual.

// historialMovimientos(): Devuelve el array de movimiento


class BankAccount {
  date = new Date().toUTCString();
  #userName;
  #password;
  #id;
  #historialPesos;
  #historialDolares;
  #saldoPesos;
  #saldoDolares;
  constructor() {
    this.#historialPesos = [];
    this.#historialDolares = [];
    this.#userName = 'ro444';
    this.#password = 'password1234';
    this.#id = 21454654;
    this.#saldoPesos = 0;
    this.#saldoDolares = 0;
  }

  deposit(amount, term) {
    if (term == 'pesos') {
      this.#historialPesos.push({
        deposit: amount,
        date: this.date,
        total: this.#saldoPesos += amount,
      })
    } else if (term == 'dolares') {
      this.#historialDolares.push({
        deposit: amount,
        date: this.date,
        total: this.#saldoDolares += amount
      })
    }

  }
  withdrawal(amount, term) {
    if (term == "pesos") {
      if (amount > this.#saldoPesos) {
        throw new Error("you don't have enough money. Your current credit is " + this.#saldoPesos);
      } else {
        this.#historialPesos.push({
          withdrawal: amount,
          date: this.date,
          total: this.#saldoPesos -= amount
        })
      }
    } else if (term == "dolares") {
      if (amount > this.#saldoDolares) {
        throw new Error("you don't have enough money. Your current credit is " + this.#saldoDolares);
      } else {
        this.#historialDolares.push({
          withdrawal: amount,
          date: this.date,
          total: this.#saldoDolares -= amount
        })
      }
    }

  }
  showHistorial(term) {
    if (term == "pesos") {
      return this.#historialPesos;
    } else if (term == "dolares") {
      return this.#historialDolares;
    }
  }
  showSaldo(term) {
    if (term == "pesos") {
      return '$' + this.#saldoPesos;
    } else if (term == "dolares") {
      return '$usd' + this.#saldoDolares;
    }
  }
}

let user = new BankAccount();
user.deposit(200, 'pesos');
user.deposit(120, 'pesos');
user.deposit(412, 'pesos');
user.withdrawal(200, 'pesos')
console.log(user.showHistorial('pesos'))
console.log(user.showSaldo('pesos'))


user.deposit(100, 'dolares');
user.deposit(40, 'dolares');
user.deposit(25, 'dolares');
user.withdrawal(50, 'dolares')
console.log(user.showHistorial('dolares'))
console.log(user.showSaldo('dolares'))
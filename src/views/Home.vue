<template>
  <div class="mt-3 w-100 h-100 container fluid">
    <br />
    <div class="row mb-3">
      <div class="col-lg-12 col-12">
        <strong>Compare Product</strong>
        <div class="row mx-1">
          <div v-for="(item, i) in productsList" :key="i" class="p-relative mr-4 mt-2">
            <div class="card " style="width: 13rem;">
              <div :class="item.enable ? 'sizeStyleEnable' : 'sizeStyle'" class="position-relative cursor-pointer" @click="addProduct(item, i)">
                <div v-if="item.enable" class="button-remove px-3">REMOVE</div>
                <img class="card-img-top imgStyle" :src="item.img" alt="Card image cap">
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col">{{ item.name }}</div>
                  <div class="col text-right">${{ item.price }}</div>
                </div>
                <small class="card-text text-muted">{{ item.detail }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- {{$store.state.dataTabel}} -->
      <table v-if="dataTable.length > 0" class="table table-bordered mt-4">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" v-for="(item, i) in dataTable" :key="i">{{ item.name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Price</th>
            <th v-for="(item, i) in dataTable" :key="i">{{ item.price }}</th>
          </tr>
          <tr>
            <th scope="row">Colors</th>
            <th v-for="(item, i) in dataTable" :key="i" class="">
              <div v-for="color in item.color" :key="color" class="d-inline-flex">
                <div :class="color"></div>
              </div>
            </th>
          </tr>
          <tr>
            <th scope="row">Condition</th>
            <th v-for="(item, i) in dataTable" :key="i" :class="item.condition">{{ item.conditionName }}</th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

// import Axios from 'axios'
// import moment from 'moment'

export default {
  data () {
    return {
      productsList: {
        cherry: {
          id: 1,
          name: 'Cherry',
          detail: 'two charries',
          img: 'https://dw.lnwfile.com/zkh54f.png',
          color: {
            0: 'radius-orange',
            1: 'radius-green',
            2: 'radius-blue'
          },
          price: '1.99',
          condition: 'bg-green',
          conditionName: 'Fresh'
        },
        orange: {
          id: 2,
          name: 'Orange',
          detail: 'glant orange',
          img: 'https://pngimg.com/uploads/orange/orange_PNG791.png',
          color: {
            0: 'radius-green',
            1: 'radius-blue'
          },
          price: '2.99',
          condition: 'bg-orange',
          conditionName: 'Frozen'
        },
        nuts: {
          id: 3,
          name: 'Nuts',
          detail: 'Mead Nuts',
          img: 'https://purepng.com/public/uploads/large/purepng.com-mixed-nutsfood-nuts-941524642084jlovi.png',
          color: {
            0: 'radius-orange'
          },
          price: '1.00',
          condition: 'bg-orange',
          conditionName: 'Frozen'
        },
        strawbeery: {
          id: 4,
          name: 'Strawbeery',
          detail: 'Just Strawbeery',
          img: 'https://static.wixstatic.com/media/2cd43b_181dba9bcee04be391e1d114f2744318~mv2.png/v1/fill/w_472,h_420,fp_0.50_0.50,lg_1,q_95/2cd43b_181dba9bcee04be391e1d114f2744318~mv2.png',
          color: {
            0: 'radius-blue'
          },
          price: '1.49',
          condition: 'bg-green',
          conditionName: 'Fresh'
        }
      },
      dataTable: []
    }
  },
  computed: {
  },
  created () {
  },
  methods: {
    addProduct (data, index) {
      this.productsList[index].enable = true
      let checkProduct = false
      checkProduct = this.dataTable.some(x => {
        return x.id === data.id
      })
      if (checkProduct) {
        this.productsList[index].enable = false
        this.dataTable = this.dataTable.reduce((prev, curr, currIndex) => {
          if (data.id !== curr.id) {
            prev.push(curr)
          }
          return prev
        }, [])
      } else {
        // this.$store.commit('addProduct', data)
        this.dataTable.push({
          id: data.id,
          name: data.name,
          detail: data.detail,
          img: data.img,
          color: data.color,
          price: data.price,
          condition: data.condition,
          conditionName: data.conditionName,
          enable: true
        })
      }
    }
  }
}
</script>

<style>
.bg-red {
  background: red;
}
.sizeStyle {
  width: 205px;
  height: 180px;
  /* background: #F8EAEF; */
  background: white;
  /* background: red; */
}
.sizeStyle :hover{
  background: #69DBC8;
  opacity: 0.6;
}
.sizeStyleEnable{
  width: 205px;
  height: 180px;
  background: #69DBC8;
  opacity: 0.6;
}
.card-product :hover {
  box-shadow: 1px 1px 10px grey;
}
.imgStyle {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* background: red; */
}
.bg-beige {
  background: #FDEFEF;
}
.iconMinusPlus {
  border-radius: 10px;
  color: white;
  background: #296DDE;
  padding: 3px;
}
.text-white{
  color: white;
}
.bg-food {
  width: 60px;
  height: 100px;
  border-radius: 40px;
  border: 1px solid #F2F4F9;
  cursor: pointer;
  /* background: red; */
}
.icon-food {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background: white;
  margin-left: 10px;
  margin-top: 11px;
  border: 1px solid #F2F4F9;
}
.bg-orange {
  background: orange;
}
.bg-white {
  background: white;
}
.bg-green {
  background: #69DBC8;
}
.text-food-name {
  font-size: 10px;
  font-weight: 600;
}
.cursor-pointer {
  cursor: pointer;
}
.radius-orange{
  width: 15px;
  background: orange;
  border-radius: 80%;
  height: 15px;
}
.radius-blue{
  width: 15px;
  background: blue;
  border-radius: 80%;
  height: 15px;
}
.radius-green{
  width: 15px;
  background: #69DBC8;
  border-radius: 80%;
  height: 15px;
}
.button-remove{
  position: absolute;
  color: #f8f9fa;
  border-color: #f8f9fa;
  border-style: solid;
  /* padding: 5px; */
  /* border: 1px solid transparent; */
  /* font-weight: 400; */
  left: 55px;
  top: 70px;
}
</style>

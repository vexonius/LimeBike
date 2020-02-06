<template>
  <div class="section is-centered acontainer">
    <div class="container is-centered">
      <div class="columns">
        <div class="column">
          <h1 class="title is-1 is-spaced">Dashboard</h1>
        </div>
        <div class="column">
          <div class="is-pulled-right felxis">
            <h5 class="subtitle is-5 padd-10 is-marginless">Welcome back, admin</h5>
            <figure class="is-pulled-right image is-64x64">
              <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
        <b-button rounded type="is-dark">Select time range</b-button>
      </div>
      <div class="columns is-centered">
        <div v-for="n in 4" :key="n" class="column">
          <div class="card dark">
            <div class="card-content">
              <p class="big_number">64</p>
              <p class="subtitle">Units rented</p>
            </div>
          </div>
        </div>
      </div>
      <div class="column nopadd">
        <div class="card dark">
          <div class="card-content">
            <div id="chart">
              <apexchart type="area" height="350" :options="chartOptions" :series="series" />
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-two-thirds">
          <div class="card dark">
            <div class="card-content">
              <p class="big_number">64</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p class="subtitle">Units rented</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card dark">
            <div class="card-content">
              <p class="big_number">64</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <p class="subtitle">Units rented</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div></div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'AdminDash',
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: 'Bikes',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chartOptions: {
        theme: {
          mode: 'dark',
          monochrome: {
            enabled: false
          }
        },
        chart: {
          height: 300,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
          background: '#252526',
          foreColor: '#dadada'
        },
        colors: ['#88da1e'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: '',
          align: 'left'
        },
        grid: {},
        xaxis: {
          categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep'
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dark {
  background: #252526;
  border-radius: 10px;
}

.subtitle {
  color: #545659;
}

.dark:hover {
  border: 1px solid #88da1e;
  margin: -1px;
}

.nopadd {
  padding: 0;
  margin-bottom: 24px;
}

.acontainer {
  color: #ffffff;
  background: #1d1d1d;
  justify-content: center;
}

.tileheight {
  height: 200px;
}

.big_number {
  color: #dadada;
  font-size: 34px;
  font-weight: 800;
  align-content: center;
}
.felxis {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.padd-10 {
  padding: 0 20px;
}
</style>
<template>
  <div class="home">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="user--content">
      <div class="container">
        <h2>User Profile listing</h2>
        <div class="filter--container">
          <h3>Filter By: </h3>
          <a @click="sortGender" href="#" class="filter">Gender</a>
          <a @click="sortCardType" href="#!" class="filter">Credit Card Type</a>
          <a @click="sortPayment" href="#!" class="filter">Payment Method</a>
        </div>
        <div class="profile--container">
          <div class="profile--set">
            <button @click="setDetail(p)" class="profile" v-for="(p, index) in paginatedData" :key="index">
              <p>
                <span>Name</span>: {{ p.FirstName }} {{ p.LastName }}</p>
              <p>
                <span>Payment Method</span>: {{ p.PaymentMethod }}</p>
              <p>
                <span>Gender</span>: {{ p.Gender }}</p>
              <p>
                <span>CreditCard Type</span>: {{ p.CreditCardType }}
              </p>
            </button>
          </div>
          <div class="profile--details">
            <ProfileDetail :prof="currentProfile" />
          </div>
          <div class="buttons--container">
            <button :disabled="pageNumber === 0" @click="prevPage">Prev</button>
            <button :disabled="pageNumber >= pageCount -1" @click="nextPage">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProfileDetail from "@/components/ProfileDetail";
// @ is an alias to /src
export default {
  name: 'Home',
  components: {ProfileDetail},
  data() {
    return {
      size: 20,
      pageNumber: 0,
      currentProfile: {},
      profileData: [{
        "FirstName": "Kailee",
        "LastName": "Schaefer",
        "Gender": "Male",
        "Latitude": -36.518723,
        "Longitude": -112.08739,
        "CreditCardNumber": "348225436399406",
        "CreditCardType": "American Express",
        "Email": "LIuBTpy@QgPWSAQ.org",
        "DomainName": "wdtSvtC.biz",
        "PhoneNumber": "457-391-6210",
        "MacAddress": "88:66:af:1c:ec:51",
        "URL": "https://ykCGbJW.com/",
        "UserName": "UsWemsp",
        "LastLogin": "2011-02-26 17:29:53",
        "PaymentMethod": "check"
      }, {
        "FirstName": "Kailee",
        "LastName": "Schaefer",
        "Gender": "Male",
        "Latitude": -36.518723,
        "Longitude": -112.08739,
        "CreditCardNumber": "348225436399406",
        "CreditCardType": "American Express",
        "Email": "LIuBTpy@QgPWSAQ.org",
        "DomainName": "wdtSvtC.biz",
        "PhoneNumber": "457-391-6210",
        "MacAddress": "88:66:af:1c:ec:51",
        "URL": "https://ykCGbJW.com/",
        "UserName": "UsWemsp",
        "LastLogin": "2011-02-26 17:29:53",
        "PaymentMethod": "check"
      }],
    }
  },
  created() {
    const api = "https://api.enye.tech/v1/challenge/records"
    axios.get(api).then((response) => {
      this.profileData = response.data.records.profiles
    })
  },
  methods: {
    sortGender(){
      console.log()
      this.paginatedData = this.profileData.sort(function(a, b) {
        var keyA = a.Gender,
            keyB = b.Gender;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    },
    sortCardType(){
      console.log()
      this.paginatedData = this.profileData.sort(function(a, b) {
        var keyA = a.CreditCardType,
            keyB = b.CreditCardType;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    },
    sortPayment(){
      console.log()
      this.paginatedData = this.profileData.sort(function(a, b) {
        var keyA = a.PaymentMethod,
            keyB = b.PaymentMethod;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    },
    setDetail(p) {
      this.currentProfile = p
    }
  },
  computed: {
    paginatedData: {
      get: function() {
        const start = this.pageNumber * this.size,
            end = start + this.size;
        return this.profileData.slice(start, end);
      },
      set: function(value) {
        console.log('in setter', value)
        this.profileData = value
      }
    },
    pageCount(){
      let l = this.profileData.length,
          s = this.size;
      return Math.ceil(l/s);
    }
  }
}
</script>

<style lang="scss">
.container {
  max-width: 90%;
  width: 100%;
  margin: 0 auto;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .filter--container {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    h3 {
      font-size: 1.1rem;
      font-weight: 300;
      margin-right: 20px;
    }

    .filter {
      padding: 5px 20px;
      background: linear-gradient(180deg, #8C51A1 0%, #360F51 100%);
      border-radius: 25px;
      margin-right: 20px;
      color: #fafafa;
      transition: all .3s ease-in-out;
      @media (max-width: 770px) {
        width: 100%;
        order: 1;
        margin-top: 10px;
      }

      &:hover {
        transform: scale(1.02);
      }

      &.active {
        background: #000;

        &:hover {
          transform: none;
        }
      }
    }
  }

  .profile--container {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
  }

  .profile--details {
    width: 40%;
    padding: 0 10px;
    @media (max-width: 1024px) {
      width: 100%;
      order: 1;
    }
  }

  .profile--set {
    width: 60%;
    max-height: 75vh;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 1024px) {
      width: 100%;
      order: 2;
    }
    button {
      border: none;
      outline: none;

    }
  }
  .buttons--container {
    margin-top: 10px;
    button {
      border: none;
      background: linear-gradient(275.47deg, #8C51A1 2.71%, #360F51 99.61%);
      color: #fafafa;
      padding: 5px 20px;
      margin-right: 10px;
      border-radius: 25px;
      outline: none!important;
    }
  }

  .profile {
    display: flex;
    flex-wrap: wrap;
    width: calc(50% - 20px);
    background: linear-gradient(275.47deg, #8C51A1 2.71%, #360F51 99.61%);
    border-radius: 25px;
    padding: 10px 20px 20px;
    margin-top: 20px;
    margin-right: 20px;
    @media (max-width: 725px) {
      width: 100%;
      margin-right: 0;
    }

    span {
      font-weight: 600;
    }

    p {
      margin-right: 20px;
      margin-top: 10px;
      color: #fafafa;
    }
  }
}
</style>
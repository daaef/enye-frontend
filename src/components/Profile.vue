<template>
  <a href="#" @click="setDetail" class="profile">
    <p>
      <span>Name</span>: {{ profile.FirstName }} {{ profile.LastName }}</p>
    <p>
      <span>Payment Method</span>: {{ profile.PaymentMethod }}</p>
    <p>
      <span>Gender</span>: {{ profile.Gender }}</p>
    <p>
      <span>CreditCard Type</span>: {{ profile.CreditCardType }}</p>
  </a>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    profile: {
      type: Object,
      default: function () {
        return {
          FirstName: "Kailee",
          LastName: "Schaefer",
          Gender: "Male",
          Latitude: -36.518723,
          Longitude: -112.08739,
          CreditCardNumber: "348225436399406",
          CreditCardType: "American Express",
          Email: "LIuBTpy@QgPWSAQ.org",
          DomainName: "wdtSvtC.biz",
          PhoneNumber: "457-391-6210",
          MacAddress: "88:66:af:1c:ec:51",
          URL: "https://ykCGbJW.com/",
          UserName: "UsWemsp",
          LastLogin: "2011-02-26 17:29:53",
          PaymentMethod: "check",
        }
      }
    }
  },
  methods: {
    setDetail() {
      this.$store.commit('setProfile',this.$props.profile)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.profile {
  display: flex;
  flex-wrap: wrap;
  width: calc(50% - 20px);
  background: linear-gradient(275.47deg, #8C51A1 2.71%, #360F51 99.61%);
  border-radius: 25px;
  padding: 10px 20px 20px;
  margin-top: 20px;
  margin-right: 20px;
  span {
    font-weight: 600;
  }
  p {
    margin-right: 20px;
    margin-top: 10px;
    color: #fafafa;
  }
}
</style>

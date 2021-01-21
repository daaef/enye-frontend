<template>
  <div class="profileDetail">
    <p>
      <span>Name</span>: {{ prof.FirstName }} {{ prof.FirstName }}
    </p>
    <p>
      <span>Payment Method</span>: {{ prof.PaymentMethod }}
    </p>
    <p>
      <span>Gender</span>: {{ prof.Gender }}
    </p>
    <p>
      <span>Email</span>: {{ prof.Email }}
    </p>
    <p>
      <span>CreditCard Type</span>: {{ prof.CreditCardType }}
    </p>
    <p>
      <span>CreditCard Number</span>: {{ prof.CreditCardNumber }}
    </p>
    <p>
      <span>Latitude</span>: {{ prof.Latitude }}
    </p>
    <p>
      <span>Longitude</span>: {{ prof.Longitude }}
    </p>
    <p>
      <span>DomainName</span>: {{ prof.DomainName }}
    </p>
    <p>
      <span>PhoneNumber</span>: {{ prof.PhoneNumber }}
    </p>
    <p>
      <span>MacAddress</span>: {{ prof.MacAddress }}
    </p>
    <p>
      <span>URL</span>: {{ prof.URL }}
    </p>
    <p>
      <span>UserName</span>: {{ prof.UserName }}
    </p>
    <p>
      <span>Last Login</span>: {{ prof.LastLogin }}
    </p>
    <p>
      <span>Payment Method</span>: {{ prof.PaymentMethod }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProfileDetail',
  props: {
    prof: {
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
  mounted() {
    console.log(this.$props.prof)
  },
  computed: {
    profileDetail() {
      console.log(this.$store.getters.profile)
      return this.$store.getters.profile
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profileDetail {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: linear-gradient(275.47deg, #8C51A1 2.71%, #360F51 99.61%);
  border-radius: 25px;
  padding: 10px 20px 20px;
  margin-top: 20px;
  span {
    font-weight: 600;
    font-size: 1.1rem;
  }
  p {
    margin-top: 10px;
    color: #fafafa;
    width: 100%;
    font-size: 1.2rem;
  }
}
</style>

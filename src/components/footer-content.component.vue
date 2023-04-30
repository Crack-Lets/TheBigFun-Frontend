<template>

  <div class="footer">

    <div class="left">
      <h3>Explore</h3>
      <div class="contentt">
<!--        <a href="#">
          <pv-button class="pvtt text-black-alpha-90" label="FAQs" text/>
        </a>-->

        <router-link to="/faqs">
          <pv-button class="pvtt text-black-alpha-90" label="FAQs" text/>
        </router-link>

        <router-link to="/#">
          <pv-button class="pvtt text-black-alpha-90" label="Privacy politics" text/>
        </router-link>

      </div>
    </div>

    <div class="socialmedia">
      <h3>Social Media</h3>
      <div class="contentt">

        <a href="https://www.facebook.com/" target="_blank" class="references">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/512px-2021_Facebook_icon.svg.png" alt="Facebook icon">
        </a>

        <a href="https://twitter.com/" target="_blank" class="references">
          <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="twitter icon">
        </a>

        <a href="https://instagram.com" target="_blank">
          <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="instagram icon">
        </a>

      </div>

    </div>

    <div class="rights">
      <h3>
        Copyright &copy; Designed by TheCrakeletsGroup
      </h3>
    </div>

  </div>

</template>

<script>
export default {
  name: "footer-content",

  data(){
    return{
      items:[

      ]
    }
  }

}
</script>






<style scoped>

.footer{
  background-color: #6363A3;
  position: absolute;
  bottom: 0;

  width: 99%;
  padding-bottom: 5px;
  display: flex;
}

.footer>div{
  width: 33%;
}

h3{
  margin-top: 10px;
  margin-bottom: 8px;
  width: 100%;
  justify-content: center;
  display: flex;
  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;
}

.contentt{
  display: flex;
  justify-content: center;
}

.rights{
  display: flex;
  align-items: center;
}
img{
  margin-top:5px;
  height: 30px;
}

.references{
  margin-right: 30px;
}

.pvtt{
  text-decoration-color: black;

}

a{
  text-decoration: none;
}

.rights>h3{
  font-size: 14px;
  font-family: sans-serif ;

}


</style>

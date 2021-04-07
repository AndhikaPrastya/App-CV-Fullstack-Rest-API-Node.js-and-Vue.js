.<template>
  <div id="login">
    <div class="container-fluid">
      <div class="content">
        <div class="container">
          <div class="row justify-content-center">
            <!-- <div class="col-md-6 order-md-2">
          <img src="images/undraw_file_sync_ot38.svg" alt="Image" class="img-fluid">
        </div> -->
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-12">
                  <div class="form-block">
                    <div class="mb-4">
                      <h3>Log In to <strong>App CV</strong></h3>
                    </div>

                    <form @submit.prevent="handleSubmit">
                      <div class="form-group first">
                        <label for="email">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="email"
                        />
                      </div>
                      <div class="form-group last mb-4">
                        <label for="password">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          v-model="password"
                        />
                      </div>

                      <input
                        type="submit"
                        value="Log In"
                        class="btn btn-pill text-white btn-block btn-primary"
                      />

                      <span class="d-block text-center my-4 text-muted">
                        Sign Up</span
                      >
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },

  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("login", {
          email: this.email,
          password: this.password,
        });

        (this.email = ""), (this.password = "");
        // console.log(response);
        localStorage.setItem("token", response.data.token);
        this.$router.replace(
          { name: "home", params: { ...this.$route.params } },
          () => {
            this.$router.go(0);
          }
        );
      } catch (e) {
        (this.error = "Invalid email/Password!"),
          (this.email = ""),
          (this.password = "");
      }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
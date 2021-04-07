.<template>
  <div id="register">
    <div class="container-fluid">
      <div class="content">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-12">
                  <div class="form-block">
                    <div class="mb-4">
                      <h3>Sign Up</h3>
                    </div>

                    <form @submit.prevent="handleSubmit">
                      <div class="form-group first">
                        <label for="nameGendre">Nama</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="nameGendre"
                        />
                      </div>
                      <!-- <div class="form-group first">
                        <label for="birthPlace">Tempat Lahir</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="birthPlace"
                        />
                      </div> -->
                      <!-- <div class="form-group first">
                        <label for="birthDate">Tanggal Lahir</label>
                        <input
                          type="date"
                          class="form-control"
                          v-model="birthDate"
                        />
                      </div>
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
                      <div class="form-group first">
                        <label for="idReligion">Agama</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="idReligion"
                        />
                      </div>
                      <div class="form-group first">
                        <label for="idHealth">Kesehatan</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="idHealth"
                        />
                      </div>
                      <div class="form-group first">
                        <label for="idGendre">Jenis Kelamin</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="idGendre"
                        />
                      </div> -->

                      <input
                        type="submit"
                        value="Log In"
                        class="btn btn-pill text-white btn-block btn-primary"
                      />
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
  name: "Register",
  data() {
    return {
      nameGendre: "",
      // birtPlace: "",
      // birtDate: "",
      // username: "",
      // password: "",
      // idGendre: "",
      // idHealth: "",
      // idReligion: "",
    };
  },

  methods: {
    async handleSubmit() {
      const response = await axios.post("gendre/add", {
        nameGendre: this.nameGendre,
        // birtPlace: this.birthPlace,
        // birtDate: this.birthDate,
        // username: this.username,
        // password: this.password,
        // idGendre: this.idGendre,
        // idHealth: this.idHealth,
        // idReligion: this.idReligion,
      });
      console.log(response);
      // (this.username = ""), (this.password = ""), (this.password_repeat = "");
      // this.$router.push("login");
      // } catch (e) {
      //   (this.error = "Register failed! Invalid Data!"),
      //     (this.username = ""),
      //     (this.password = ""),
      //     (this.password_repeat = "");
      // }
    },
  },
};
</script>

<style lang="stylus" scoped></style>
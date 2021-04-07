<template>
  <div class="viewPerson">
    <Sidebar />
    <div class="main-panel" id="main-panel">
      <Navbar />

      <div class="panel-header panel-header-sm"></div>
      <div class="content">
        <div class="row">
          <div class="col-md-8">
            <!-- data objective -->
            <div class="card">
              <div class="card-header">
                <h5 class="title float-right">Objective</h5>
              </div>
              <div class="card-body">
                <h5 class="card-title float-right">
                  <router-link
                    :to="{ name: 'addObjective' }"
                    class="float-right btn btn-primary btn-sm"
                    >Add</router-link
                  >
                </h5>
                <table class="table">
                  <tbody>
                    <tr v-for="item in items" :key="item.idObjective">
                      <td>*</td>
                      <td>{{ item.descObjective }}</td>
                      <td class="text-center">
                        <router-link
                          :to="{
                            name: 'updateObjective',
                            params: { id: item.idObjective },
                          }"
                          class="btn btn-primary btn-sm mr-3"
                          >Update</router-link
                        >
                        <a
                          class="btn btn-danger btn-sm"
                          @click="deleteObjective(item.idObjective)"
                          >Delete</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- data Profile -->
            <div class="card">
              <div class="card-header">
                <h5 class="title float-right">Profile</h5>
              </div>
              <div class="card-body">
                <h5 class="card-title float-right">
                  <router-link
                    :to="{ name: 'addProfile' }"
                    class="float-right btn btn-primary btn-sm"
                    >Add</router-link
                  >
                </h5>
                <table class="table">
                  <tbody>
                    <tr v-for="item in items" :key="item.idProfile">
                      <td>*</td>
                      <td>{{ item.descProfile }}</td>
                      <td class="text-center">
                        <router-link
                          :to="{
                            name: 'updateProfile',
                            params: { id: item.idProfile },
                          }"
                          class="btn btn-primary btn-sm mr-3"
                          >Update</router-link
                        >
                        <a
                          class="btn btn-danger btn-sm"
                          @click="deleteProfile(item.idProfile)"
                          >Delete</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- data Educations -->
            <div class="card">
              <div class="card-header">
                <h5 class="title float-right">Education</h5>
              </div>
              <div class="card-body">
                <h5 class="card-title float-right">
                  <router-link
                    :to="{ name: 'addEducation' }"
                    class="float-right btn btn-primary btn-sm"
                    >Add</router-link
                  >
                </h5>
                <table class="table">
                  <thead class="text-primary">
                    <th>School</th>
                    <th>Degree</th>
                    <th>Subject</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.idEducation">
                      <td>{{ item.school }}</td>
                      <td>{{ item.degree }}</td>
                      <td>{{ item.subject }}</td>
                      <td>{{ item.priodFrom }}</td>
                      <td>{{ item.priodTo }}</td>
                      <td class="text-center">
                        <router-link
                          :to="{
                            name: 'updateEducation',
                            params: { id: item.idEducation },
                          }"
                          class="btn btn-primary btn-sm mr-3"
                          >Update</router-link
                        >
                        <a
                          class="btn btn-danger btn-sm"
                          @click="deleteEducation(item.idEducation)"
                          >Delete</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- data Course -->
            <div class="card">
              <div class="card-header">
                <h5 class="title float-right">Course</h5>
              </div>
              <div class="card-body">
                <h5 class="card-title float-right">
                  <router-link
                    :to="{ name: 'addCourse' }"
                    class="float-right btn btn-primary btn-sm"
                    >Add</router-link
                  >
                </h5>
                <table class="table">
                  <thead class="text-primary">
                    <th>Title</th>
                    <th>Provider</th>
                    <th>Place</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Certificate</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.idCourse">
                      <td>{{ item.titleCourse }}</td>
                      <td>{{ item.providerCourse }}</td>
                      <td>{{ item.placeCourse }}</td>
                      <td>{{ item.dateCourse }}</td>
                      <td>{{ item.durationCourse }}</td>
                      <td>{{ item.certificateCourse }}</td>
                      <td class="text-center">
                        <router-link
                          :to="{
                            name: 'updateCourse',
                            params: { id: item.idCourse },
                          }"
                          class="btn btn-primary btn-sm mr-3"
                          >Update</router-link
                        >
                        <a
                          class="btn btn-danger btn-sm"
                          @click="deleteCourse(item.idCourse)"
                          >Delete</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- data Training -->
            <div class="card">
              <div class="card-header">
                <h5 class="title float-right">Training</h5>
              </div>
              <div class="card-body">
                <h5 class="card-title float-right">
                  <router-link
                    :to="{ name: 'addTraining' }"
                    class="float-right btn btn-primary btn-sm"
                    >Add</router-link
                  >
                </h5>
                <table class="table">
                  <thead class="text-primary">
                    <th>Title</th>
                    <th>Provider</th>
                    <th>Place</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Certificate</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.idTraining">
                      <td>{{ item.titleTraining }}</td>
                      <td>{{ item.providerTraining }}</td>
                      <td>{{ item.placeTraining }}</td>
                      <td>{{ item.dateTraining }}</td>
                      <td>{{ item.durationTraining }}</td>
                      <td>{{ item.certificateTraining }}</td>
                      <td class="text-center">
                        <router-link
                          :to="{
                            name: 'updateTraining',
                            params: { id: item.idTraining },
                          }"
                          class="btn btn-primary btn-sm mr-3"
                          >Update</router-link
                        >
                        <a
                          class="btn btn-danger btn-sm"
                          @click="deleteTraining(item.idTraining)"
                          >Delete</a
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- Datlain -->
            <div class="card">
              <div class="card-header">
                <h5 class="title">Profile</h5>
              </div>
              <div class="card-body">
                <table class="table">
                  <thead class="text-primary">
                    <th>No</th>
                    <!-- <th>id Gendre</th> -->
                    <th>Person</th>
                  </thead>
                  <tbody>
                    <tr v-for="item in items" :key="item.idPerson">
                      <td>{{ item.idPerson }}</td>
                      <td>{{ item.namePerson }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-user">
              <div class="image">
                <!-- <img src="../assets/img/bg5.jpg" alt="..."> -->
              </div>
              <div class="card-body">
                <div class="author">
                  <a href="#">
                    <!-- <img class="avatar border-gray" src="../assets/img/mike.jpg" alt="..."> -->
                    <h5 class="title">Mike Andrew</h5>
                  </a>
                  <p class="description">michael24</p>
                </div>
              </div>
              <hr />
              <div class="button-container">
                <button
                  href="#"
                  class="btn btn-neutral btn-icon btn-round btn-lg"
                >
                  <i class="fab fa-facebook-f"></i>
                </button>
                <button
                  href="#"
                  class="btn btn-neutral btn-icon btn-round btn-lg"
                >
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  href="#"
                  class="btn btn-neutral btn-icon btn-round btn-lg"
                >
                  <i class="fab fa-google-plus-g"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";
import Navbar from "./layout/Navbar.vue";
import Sidebar from "./layout/Sidebar.vue";
import Footer from "./layout/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Sidebar,
    Footer,
  },
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.viewObjective();
  },

  methods: {
    async viewObjective() {
      try {
        const response = await axios.get("http://localhost:3000/api/objective");
        this.items = response.data.values;
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  // async mounted() {
  //   const response = await axios.get("http://localhost:3000/api/person");
  //   this.items = response.data;
  // },
};
</script>
<style lang="stylus" scoped></style>
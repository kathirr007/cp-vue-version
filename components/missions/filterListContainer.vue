<template>
  <div class="filter-list-container">
    <div class="filter-list">
      <ul>
        <li>
          <div class="select-group">
            <div class="form-group clients">
              <label for="" class="filter-title">Filters</label>
              <multiselect v-model="clients.value" deselect-label="Can't remove this value" track-by="text"
                label="text" placeholder="All Clients" :options="clients.options" :searchable="false"
                :allow-empty="false">
              </multiselect>
            </div>
          </div>
        </li>
        <li>
          <div class="select-group">
            <div class="form-group contracts">
              <div class="form-group contracts">
                <multiselect v-model="contracts.value" deselect-label="Can't remove this value" track-by="text"
                  label="text" placeholder="All Contracts" :options="contracts.options" :searchable="false"
                  :allow-empty="false">
                </multiselect>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="select-group">
            <div class="form-group owners">
              <!-- <v-select
                label="ownerName"
                :options="filterOptions.owners"
                placeholder="All Owners"
              >
              </v-select> -->
              <!-- <b-form-select
                v-model="owners.selected"
                :options="owners.options"
              >
              </b-form-select> -->
              <multiselect v-model="owners.value" deselect-label="Can't remove this value" track-by="text"
                label="text" placeholder="All Teams" :options="owners.options" :searchable="false"
                :allow-empty="false">
              </multiselect>
            </div>
          </div>
        </li>
        <li>
          <div class="select-group">
            <div class="form-group languages">
              <!-- <v-select
                label="languageName"
                :options="filterOptions.languages"
                placeholder="All Languages"
              >
              </v-select> -->
              <!-- <b-form-select
                v-model="languages.selected"
                :options="languages.options"
              >
              </b-form-select> -->
              <multiselect v-model="languages.value" deselect-label="Can't remove this value" track-by="text"
                label="text" placeholder="All Teams" :options="languages.options" :searchable="false"
                :allow-empty="false">
              </multiselect>
            </div>
          </div>
        </li>
        <li>
          <div class="select-group">
            <div class="form-group teams">
              <!-- <v-select
                label="teamName"
                :options="filterOptions.teams"
                placeholder="All Teams"
              >
              </v-select> -->
              <!-- <b-form-select
                v-model="teams.selected"
                :options="teams.options"
                multiple
                select-size=1
              >
              </b-form-select>
              {{teams.selected}} -->
              <!-- <select-picker
                :dropdown-data="teams.options"
                placeholder="All Teams"
                v-model="teams.selected"
                @change="() => {}"
              /> -->
              <!-- <vueMultiSelect
                :options="teams.options"
                placeholder="All teams"
                v-model="teams.value"
              /> -->
              <multiselect v-model="teams.value" deselect-label="Can't remove this value" track-by="text"
                label="text" placeholder="All Teams" :options="teams.options" :searchable="false"
                :allow-empty="false">
                <!-- <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong> is written in<strong>  {{ option.language }}</strong></template> -->
              </multiselect>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        clients: {
          selected: null,
          options: [
            // { value: null, text: 'All clients' },
            {value: "Client 01", text: "Client 01"},
            {value: "Client 02", text: "Client 02"},
            {value: "Client 03", text: "Client 03"},
            {value: "Client 04", text: "Client 04"},
            {value: "Client 05", text: "Client 05"},
            {value: "Client 06", text: "Client 06"},
            {value: "Client 07", text: "Client 07"},
            {value: "Client 08", text: "Client 08"},
            {value: "Client 09", text: "Client 09"},
            {value: "Client 10", text: "Client 10"},
            {value: "Client 11", text: "Client 11"},
            {value: "Client 12", text: "Client 12"},
            {value: "Client 13", text: "Client 13"},
            {value: "Client 14", text: "Client 14"},
            {value: "Client 15", text: "Client 15"},
            {value: "Client 16", text: "Client 16"},
            {value: "Client 17", text: "Client 17"},
            {value: "Client 18", text: "Client 18"},
            {value: "Client 19", text: "Client 19"},
            {value: "Client 20", text: "Client 20"},
          ]
        },
        contracts: {
          selected: null,
          options: [
            // { value: null, text: 'All Contracts' },
            {text: "Contract 01", value: "Contract 01"},
            {text: "Contract 02", value: "Contract 02"},
            {text: "Contract 03", value: "Contract 03"},
            {text: "Contract 04", value: "Contract 04"},
            {text: "Contract 05", value: "Contract 05"},
            {text: "Contract 06", value: "Contract 06"},
            {text: "Contract 07", value: "Contract 07"},
            {text: "Contract 08", value: "Contract 08"},
            {text: "Contract 09", value: "Contract 09"},
            {text: "Contract 10", value: "Contract 10"},
            {text: "Contract 11", value: "Contract 11"},
            {text: "Contract 12", value: "Contract 12"},
            {text: "Contract 13", value: "Contract 13"},
            {text: "Contract 14", value: "Contract 14"},
            {text: "Contract 15", value: "Contract 15"},
            {text: "Contract 16", value: "Contract 16"},
            {text: "Contract 17", value: "Contract 17"},
            {text: "Contract 18", value: "Contract 18"},
            {text: "Contract 19", value: "Contract 19"},
            {text: "Contract 20", value: "Contract 20"},
          ]
        },
        owners: {
          selected: null,
          options: [
            // { value: null, text: 'All Contracts' },
            {text: "Owner 01", value: "Owner 01"},
            {text: "Owner 02", value: "Owner 02"},
            {text: "Owner 03", value: "Owner 03"},
            {text: "Owner 04", value: "Owner 04"},
            {text: "Owner 05", value: "Owner 05"},
            {text: "Owner 06", value: "Owner 06"},
            {text: "Owner 07", value: "Owner 07"},
            {text: "Owner 08", value: "Owner 08"},
            {text: "Owner 09", value: "Owner 09"},
            {text: "Owner 10", value: "Owner 10"},
            {text: "Owner 11", value: "Owner 11"},
            {text: "Owner 12", value: "Owner 12"},
            {text: "Owner 13", value: "Owner 13"},
            {text: "Owner 14", value: "Owner 14"},
            {text: "Owner 15", value: "Owner 15"},
            {text: "Owner 16", value: "Owner 16"},
            {text: "Owner 17", value: "Owner 17"},
            {text: "Owner 18", value: "Owner 18"},
            {text: "Owner 19", value: "Owner 19"},
            {text: "Owner 20", value: "Owner 20"},
          ]
        },
        languages: {
          selected: null,
          options: [
            // { value: null, text: 'All Languages' },
            {text: "Language 01", value: "Language 01"},
            {text: "Language 02", value: "Language 02"},
            {text: "Language 03", value: "Language 03"},
            {text: "Language 04", value: "Language 04"},
            {text: "Language 05", value: "Language 05"},
            {text: "Language 06", value: "Language 06"},
            {text: "Language 07", value: "Language 07"},
            {text: "Language 08", value: "Language 08"},
            {text: "Language 09", value: "Language 09"},
            {text: "Language 10", value: "Language 10"},
            {text: "Language 11", value: "Language 11"},
            {text: "Language 12", value: "Language 12"},
            {text: "Language 13", value: "Language 13"},
            {text: "Language 14", value: "Language 14"},
            {text: "Language 15", value: "Language 15"},
            {text: "Language 16", value: "Language 16"},
            {text: "Language 17", value: "Language 17"},
            {text: "Language 18", value: "Language 18"},
            {text: "Language 19", value: "Language 19"},
            {text: "Language 20", value: "Language 20"},
          ]
        },
        teams: {
          value: '',
          options: [
            // { text: 'All Teams', value: ''  },
            {text: "Team 01", value: "Team 01"},
            {text: "Team 02", value: "Team 02"},
            {text: "Team 03", value: "Team 03"},
            {text: "Team 04", value: "Team 04"},
            {text: "Team 05", value: "Team 05"},
            {text: "Team 06", value: "Team 06"},
            {text: "Team 07", value: "Team 07"},
            {text: "Team 08", value: "Team 08"},
            {text: "Team 09", value: "Team 09"},
            {text: "Team 10", value: "Team 10"},
            {text: "Team 11", value: "Team 11"},
            {text: "Team 12", value: "Team 12"},
            {text: "Team 13", value: "Team 13"},
            {text: "Team 14", value: "Team 14"},
            {text: "Team 15", value: "Team 15"},
            {text: "Team 16", value: "Team 16"},
            {text: "Team 17", value: "Team 17"},
            {text: "Team 18", value: "Team 18"},
            {text: "Team 19", value: "Team 19"},
            {text: "Team 20", value: "Team 20"},
          ]
        },
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tab-panel-container {
    .filter-title {
      font-weight: 600;
      color: $main;
      margin-bottom: 10px;
      text-transform: uppercase;
    }

    .filter-list-container {
      .filter-list {
        ul {
          padding: 0;
          margin: 0;
          list-style-type: none;

          li {}
        }
      }
    }

    .filter-list-display {
      margin: 15px 0;

      .filter-list-check-container {
        border: 2px solid #d7d9dc;
        border-radius: 4px;
        padding: 0 5px;
        margin-bottom: 10px;

        label {
          color: #7d889a;
          font-weight: 400;
        }

        &.selected-in-list {
          border: 2px solid #448AFF;

          label {
            color: $selected;
          }
        }

        &:hover,
        &:hover label {
          // border: 2px solid #448AFF;
          cursor: pointer;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .filter-list-bottom {
      padding-bottom: 20px;
    }
  }
</style>
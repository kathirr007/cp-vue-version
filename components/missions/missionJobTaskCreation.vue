<template>
<div class="col-md-12 settings-wrap job-task-creation-container px-5">
  <span class="close">
    <a href="javascript:;">
      <i class="material-icons">
      close
      </i>
    </a>
  </span>
  <div class="row">
    <div class="col-md-12 job-task-creation-wizard mt-0">
      <div class="col-md-12 progress-steps">
        <div id="wizardCard">
          <form id="wizardForm" method="" action="">
            <div class="tab-links hidden">
              <ul class="nav">
                <li><a href="#job-task-creation-settings-1" data-toggle="tab">Create Cards</a></li>
                <li><a href="#job-task-creation-settings-2" data-toggle="tab">Your Cards</a></li>
              </ul>
            </div>
            <div class="tab-content">
              <div class="tab-pane" id="job-task-creation-settings-1">
                <div class="row">
                  <div class="col-md-10 job-task-creation-title">
                    Create cards
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 job-task-creation-settings">
                    <div class="row">
                      <div class="col-md-12">
                        <h4 class="title">
                        Writer
                        </h4>
                        <div class="row">
                          <div class="col-md-6 mb-10 select-assignee-container">
                            <label>Writer</label>
                            <select name="" class="selectpicker select-assignee"  multiple data-live-search="true" data-actions-box="true"
                              data-selected-text-format="count > 1" title="Choose your writers">
                              <option data-hidden="true"></option>
                              <option value="Thomas" data-content='
                                <img class="img-circle" src="lbd/img/default-avatar.png">
                                <span>Thomas B.</span>'
                                >
                                Thomas B.
                              </option>
                              <option value="Nocoleta" data-content='
                                <img class="img-circle" src="lbd/img/default-avatar.png">
                                <span>Nocoleta B.</span>'
                                >
                                Nocoleta B.
                              </option>
                              <option value="Paolo" data-content='
                                <img class="img-circle" src="lbd/img/default-avatar.png">
                                <span>Paolo P.</span>'
                                >
                                Paolo P.
                              </option>
                              <option value="Derick" data-content='
                                <img class="img-circle" src="lbd/img/default-avatar.png">
                                <span>Derick R.</span>'
                                >
                                Derick R.
                              </option>
                              <option value="Yves" data-content='
                                <div class="card-user-empty">
                                  YC
                                  </div> <span>Yves C.</span>'
                                  >
                                  Yves C.
                                </option>
                              </select>

                              <div class="selected-assignee-list">
                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="col-md-12 selected-assignee-container">
                                      <div class="row df-ac">
                                        <div class="col-md-2 user-image">
                                          <img src="lbd/img/default-avatar.png" class="img-circle">
                                        </div>
                                        <div class="col-md-9 assignee-info">
                                          <div class="contributor-name">Thomas B.</div>
                                        </div>
                                        <div class="col-md-1 delete-assignee">
                                          <a href="javascript:;">
                                            <i class="material-icons">delete</i>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-md-3 mb-10">
                              <label>Due Date</label>
                              <input class="form-control datepicker-end" placeholder="Due Date" type="text"/>
                            </div>
                            <div class="col-md-3 mb-10">
                              <label>Hour</label>
                              <input class="form-control timepicker" placeholder="Hour" type="text"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <h4 class="title">
                          Editor
                          </h4>
                          <div class="row">
                            <div class="col-md-6 mb-10 select-assignee-container">
                              <label>Editor</label>
                              <select name="" class="selectpicker select-assignee"  multiple data-live-search="true" data-actions-box="true"
                                data-selected-text-format="count > 1" title="Choose your editors">
                                <option data-hidden="true"></option>
                                <option value="Thomas" data-content='
                                  <img class="img-circle" src="lbd/img/default-avatar.png">
                                  <span>Thomas B.</span>'
                                  >
                                  Thomas B.
                                </option>
                                <option value="Nocoleta" data-content='
                                  <img class="img-circle" src="lbd/img/default-avatar.png">
                                  <span>Nocoleta B.</span>'
                                  >
                                  Nocoleta B.
                                </option>
                                <option value="Paolo" data-content='
                                  <img class="img-circle" src="lbd/img/default-avatar.png">
                                  <span>Paolo P.</span>'
                                  >
                                  Paolo P.
                                </option>
                                <option value="Derick" data-content='
                                  <img class="img-circle" src="lbd/img/default-avatar.png">
                                  <span>Derick R.</span>'
                                  >
                                  Derick R.
                                </option>
                                <option value="Yves" data-content='
                                  <div class="card-user-empty">
                                    YC
                                    </div> <span>Yves C.</span>'
                                    >
                                    Yves C.
                                  </option>
                                </select>
                                <div class="selected-assignee-list">
                                  <div class="row">
                                    <div class="col-md-12">
                                      <div class="col-md-12 selected-assignee-container">
                                        <div class="row df-ac">
                                          <div class="col-md-2 user-image">
                                            <img src="lbd/img/default-avatar.png" class="img-circle">
                                          </div>
                                          <div class="col-md-9 assignee-info">
                                            <div class="contributor-name">Thomas B.</div>
                                          </div>
                                          <div class="col-md-1 delete-assignee">
                                            <a href="javascript:;">
                                              <i class="material-icons">delete</i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="col-md-12 selected-assignee-container">
                                        <div class="row df-ac">
                                          <div class="col-md-2 user-image">
                                            <div class="card-user-empty">
                                              NB
                                            </div>
                                          </div>
                                          <div class="col-md-9 assignee-info">
                                            <div class="contributor-name">Nocoleta B.</div>
                                          </div>
                                          <div class="col-md-1 delete-assignee">
                                            <a href="javascript:;">
                                              <i class="material-icons">delete</i>
                                            </a>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-3 mb-10">
                                <label>Due Date</label>
                                <input class="form-control datepicker-end" placeholder="Due Date" type="text"/>
                              </div>
                              <div class="col-md-3 mb-10">
                                <label>Hour</label>
                                <input class="form-control timepicker" placeholder="Hour" type="text"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <h4 class="title">
                            Lead Editor
                            </h4>
                            <div class="row">
                              <div class="col-md-6 mb-10 select-assignee-container">
                                <label>Lead Editor</label>
                                <select name="" class="selectpicker select-assignee"  multiple data-live-search="true" data-actions-box="true"
                                  data-selected-text-format="count > 1" title="Choose your leads editor">
                                  <option data-hidden="true"></option>
                                  <option value="Thomas" data-content='
                                    <img class="img-circle" src="lbd/img/default-avatar.png">
                                    <span>Thomas B.</span>'
                                    >
                                    Thomas B.
                                  </option>
                                  <option value="Nocoleta" data-content='
                                    <img class="img-circle" src="lbd/img/default-avatar.png">
                                    <span>Nocoleta B.</span>'
                                    >
                                    Nocoleta B.
                                  </option>
                                  <option value="Paolo" data-content='
                                    <img class="img-circle" src="lbd/img/default-avatar.png">
                                    <span>Paolo P.</span>'
                                    >
                                    Paolo P.
                                  </option>
                                  <option value="Derick" data-content='
                                    <img class="img-circle" src="lbd/img/default-avatar.png">
                                    <span>Derick R.</span>'
                                    >
                                    Derick R.
                                  </option>
                                  <option value="Yves" data-content='
                                    <div class="card-user-empty">
                                      YC
                                      </div> <span>Yves C.</span>'
                                      >
                                      Yves C.
                                    </option>
                                  </select>
                                  <div class="selected-assignee-list">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <div class="col-md-12 selected-assignee-container">
                                          <div class="row df-ac">
                                            <div class="col-md-2 user-image">
                                              <img src="lbd/img/default-avatar.png" class="img-circle">
                                            </div>
                                            <div class="col-md-9 assignee-info">
                                              <div class="contributor-name">Thomas B.</div>
                                            </div>
                                            <div class="col-md-1 delete-assignee">
                                              <a href="javascript:;">
                                                <i class="material-icons">delete</i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-12 selected-assignee-container">
                                          <div class="row df-ac">
                                            <div class="col-md-2 user-image">
                                              <div class="card-user-empty">
                                                NB
                                              </div>
                                            </div>
                                            <div class="col-md-9 assignee-info">
                                              <div class="contributor-name">Nocoleta B.</div>
                                            </div>
                                            <div class="col-md-1 delete-assignee">
                                              <a href="javascript:;">
                                                <i class="material-icons">delete</i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="col-md-12 selected-assignee-container">
                                          <div class="row df-ac">
                                            <div class="col-md-2 user-image">
                                              <!-- <div class="card-user-empty">
                                                PP
                                              </div> -->
                                              <img src="lbd/img/default-avatar.png" class="img-circle">
                                            </div>
                                            <div class="col-md-9 assignee-info">
                                              <div class="contributor-name">Paolo P.</div>
                                            </div>
                                            <div class="col-md-1 delete-assignee">
                                              <a href="javascript:;">
                                                <i class="material-icons">delete</i>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-md-3 mb-10">
                                  <label>Due Date</label>
                                  <input class="form-control datepicker-end" placeholder="Due Date" type="text"/>
                                </div>
                                <div class="col-md-3 mb-10">
                                  <label>Hour</label>
                                  <input class="form-control timepicker" placeholder="Hour" type="text"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 tab-navigation">
                          <div class="row">
                            <div class="col-md-6">
                              <button type="button" class="btn btn-info btn-fill full-width btn-wd btn-no btn-cancel-settings pull-left">Cancel</button>
                            </div>
                            <div class="col-md-6">
                              <button type="button" class="btn btn-info btn-fill full-width btn-wd btn-yes pull-right btn-next">Next</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane" id="job-task-creation-settings-2">
                      <div class="row">
                        <div class="col-md-10 job-task-creation-title">
                          Your cards
                        </div>
                        <div class="col-md-12">
                          <ul class="nav container-nav col-md-4 mb-10 toggle-volume-rates">
                            <li class="active toggle-volume"><a href="javascript:;">Volume</a></li>
                            <li class="toggle-volume-bands"><a href="javascript:;">Volume(Bands)</a></li>
                            <li class="toggle-rates"><a href="javascript:;">Rates</a></li>
                          </ul>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 job-task-creation-settings">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="row">
                                <div class="col-md-12 your-cards-table-container">
                                  <div class="row">
                                    <div class="col-md-12 band-check-on">
                                      <div class="row">
                                        <div class="col-md-12">
                                          <table class="table mb-2">
                                            <thead>
                                              <tr>
                                                <th style="width: 16%;">Cards name</th>
                                                <th style="width: 6%" class="text-center">Volume</th>
                                                <th style="width: 6%">External User</th>
                                                <th style="width: 37%">Assignie</th>
                                                <th style="width: 18%" class="text-center">Rates</th>
                                                <th style="width: 12%">Total cost</th>
                                                <th style="width: 5%">Action</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>
                                                  <textarea name="input-card-name" class="input-card-name form-control no-resize" placeholder="Base 1 - 25 articles" cols="" rows="3" aria-required="true">Base 1 - 25 articles</textarea>
                                                </td>
                                                <td class="volume-without-bands">
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <input class="form-control input-volume mb-1 edit-volume" type="text" value="18" aria-invalid="false" aria-required="true">
                                                        <p class="show-volume text-main mb-2 df-ac-jc">18</p>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td class="volume-with-bands">
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="edit-volume">Type A</label>
                                                        <label for="" class="show-volume">Type A</label>
                                                        <input class="form-control input-volume mb-1 edit-volume" type="text" value="18" aria-invalid="false" aria-required="true">
                                                        <p class="show-volume text-main mb-2 df-ac-jc">18</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="edit-volume">Type B</label>
                                                        <label for="" class="show-volume">Type B</label>
                                                        <input class="form-control input-volume mb-1 edit-volume" type="text" value="18" aria-invalid="false" aria-required="true">
                                                        <p class="show-volume text-main mb-2 df-ac-jc">18</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="edit-volume">Type C</label>
                                                        <label for="" class="show-volume">Type C</label>
                                                        <input class="form-control input-volume mb-1 edit-volume" type="text" value="25" aria-invalid="false" aria-required="true">
                                                        <p class="show-volume text-main mb-2 df-ac-jc">18</p>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td>
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0" align="center">
                                                        <label for="" class="invisible">External</label>
                                                        <div class="external-user-toggle-container df-ac-jc mb-2">
                                                          <div class="switch" data-off-label="" data-on-label="">
                                                            <input type="checkbox" checked />
                                                          </div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0" align="center">
                                                        <label for="" class="invisible">External</label>
                                                        <div class="external-user-toggle-container df-ac-jc mb-2">
                                                          <div class="switch" data-off-label="" data-on-label="">
                                                            <input type="checkbox" />
                                                          </div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0" align="center">
                                                        <label for="" class="invisible">External</label>
                                                        <div class="external-user-toggle-container df-ac-jc mb-2">
                                                          <div class="switch" data-off-label="" data-on-label="">
                                                            <input type="checkbox" checked />
                                                          </div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td>
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="">Writers</label>
                                                        <select name="" class="selectpicker hide-tick select-assignee mb-2"  multiple data-live-search="true" data-actions-box="true"
                                                          data-selected-text-format="count > 1" title="Select assignees">
                                                          <option data-hidden="true"></option>
                                                          <option value="Thomas">Thomas B.</option>
                                                          <option value="Nocoleta">Nocoleta B.</option>
                                                          <option value="Paolo">Paolo P.</option>
                                                          <option value="Derick">Derick R.</option>
                                                          <option value="Yves">Yves C.</option>
                                                        </select>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="">Editor</label>
                                                        <select name="" class="selectpicker hide-tick mb-2"  data-live-search="true" title="Select assignee">
                                                          <option data-hidden="true"></option>
                                                          <option value="Thomas">Thomas B.</option>
                                                          <option value="Nocoleta">Nocoleta B.</option>
                                                          <option value="Paolo">Paolo P.</option>
                                                          <option value="Derick">Derick R.</option>
                                                          <option value="Yves">Yves C.</option>
                                                        </select>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="">Lead Editor</label>
                                                        <select name="" class="selectpicker hide-tick select-assignee mb-2"  multiple data-live-search="true" data-actions-box="true"
                                                          data-selected-text-format="count > 1" title="Select assignee">
                                                          <option data-hidden="true"></option>
                                                          <option value="Thomas">Thomas B.</option>
                                                          <option value="Nocoleta">Nocoleta B.</option>
                                                          <option value="Paolo">Paolo P.</option>
                                                          <option value="Derick">Derick R.</option>
                                                          <option value="Yves">Yves C.</option>
                                                        </select>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td>
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="invisible">Edit Rate</label>
                                                        <div class="input-group mb-2 edit-rate">
                                                          <input class="form-control" type="text" placeholder="7,75" value="7,75" aria-invalid="false" aria-required="true">
                                                          <span class="input-group-addon" >&#8364;</span>
                                                        </div>
                                                        <p class="show-rate text-main mb-2 df-ac-jc">7,75 &#8364;</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="invisible">Editor</label>
                                                        <div class="input-group mb-2 edit-rate">
                                                          <input class="form-control" type="text" placeholder="5,75" value="5,75" aria-invalid="false" aria-required="true">
                                                          <span class="input-group-addon" >&#8364;</span>
                                                        </div>
                                                        <p class="show-rate text-main mb-2 df-ac-jc">5,75 &#8364;</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="invisible">Lead Editor</label>
                                                        <div class="input-group mb-2 edit-rate">
                                                          <input class="form-control" type="text" placeholder="1,50" value="1,50" aria-invalid="false" aria-required="true">
                                                          <span class="input-group-addon" >&#8364;</span>
                                                        </div>
                                                        <p class="show-rate text-main mb-2 df-ac-jc">1,50 &#8364;</p>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td>
                                                  <p class="text-main mb-0 fw600 text-center">15,00 &#8364;</p>
                                                </td>
                                                <td class="action">
                                                  <a href="javascript:;" class="delete-card df-ac-jc">
                                                    <i class="material-icons" data-toggle="tooltip" title="Delete Card">delete</i>
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr class="new-card" style="display: none;">
                                                <td>
                                                  <textarea name="input-card-name" class="input-card-name form-control no-resize" placeholder="Card name" cols="" rows="3" aria-required="true"></textarea>
                                                </td>
                                                <td class="volume-without-bands">
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <input class="form-control input-volume mb-1 edit-volume" type="text" value="" placeholder="25" aria-invalid="false" aria-required="true">
                                                        <p class="show-volume text-main mb-2 df-ac-jc">0</p>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td class="volume-with-bands">
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="edit-volume">Type A</label>
                                                        <label for="" class="show-volume">Type A</label>
                                                        <input class="form-control input-volume mb-1 edit-volume" type="text" value="" placeholder="25" aria-invalid="false" aria-required="true">
                                                        <p class="show-volume text-main mb-2 df-ac-jc">0</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="edit-volume">Type B</label>
                                                        <label for="" class="show-volume">Type B</label>
                                                        <input class="form-control input-volume mb-1 edit-volume" type="text" value="" placeholder="25" aria-invalid="false" aria-required="true">
                                                        <p class="show-volume text-main mb-2 df-ac-jc">0</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="edit-volume">Type C</label>
                                                        <label for="" class="show-volume">Type C</label>
                                                        <input class="form-control input-volume mb-1 edit-volume" type="text" value="" placeholder="25" aria-invalid="false" aria-required="true">
                                                        <p class="show-volume text-main mb-2 df-ac-jc">0</p>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td>
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0" align="center">
                                                        <label for="" class="invisible">External</label>
                                                        <div class="external-user-toggle-container df-ac-jc mb-2">
                                                          <div class="switch" data-off-label="" data-on-label="">
                                                            <input type="checkbox" checked />
                                                          </div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0" align="center">
                                                        <label for="" class="invisible">External</label>
                                                        <div class="external-user-toggle-container df-ac-jc mb-2">
                                                          <div class="switch" data-off-label="" data-on-label="">
                                                            <input type="checkbox" checked />
                                                          </div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0" align="center">
                                                        <label for="" class="invisible">External</label>
                                                        <div class="external-user-toggle-container df-ac-jc mb-2">
                                                          <div class="switch" data-off-label="" data-on-label="">
                                                            <input type="checkbox" checked />
                                                          </div>
                                                        </div>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td>
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="">Writers</label>
                                                        <select name="" class="selectpicker hide-tick select-assignee mb-2"  multiple data-live-search="true" data-actions-box="true"
                                                          data-selected-text-format="count > 1" title="Select assignees">
                                                          <option data-hidden="true"></option>
                                                          <option value="Thomas">Thomas B.</option>
                                                          <option value="Nocoleta">Nocoleta B.</option>
                                                          <option value="Paolo">Paolo P.</option>
                                                          <option value="Derick">Derick R.</option>
                                                          <option value="Yves">Yves C.</option>
                                                        </select>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="">Editor</label>
                                                        <select name="" class="selectpicker hide-tick select-assignee mb-2"  multiple data-live-search="true" data-actions-box="true"
                                                          data-selected-text-format="count > 1" title="Select assignees">
                                                          <option data-hidden="true"></option>
                                                          <option value="Thomas">Thomas B.</option>
                                                          <option value="Nocoleta">Nocoleta B.</option>
                                                          <option value="Paolo">Paolo P.</option>
                                                          <option value="Derick">Derick R.</option>
                                                          <option value="Yves">Yves C.</option>
                                                        </select>
                                                        <!-- <select name="" class="selectpicker hide-tick mb-2"  data-live-search="true" title="Select assignee">
                                                          <option data-hidden="true"></option>
                                                          <option value="Thomas">Thomas B.</option>
                                                          <option value="Nocoleta">Nocoleta B.</option>
                                                          <option value="Paolo">Paolo P.</option>
                                                          <option value="Derick">Derick R.</option>
                                                          <option value="Yves">Yves C.</option>
                                                        </select> -->
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="">Lead Editor</label>
                                                        <select name="" class="selectpicker hide-tick select-assignee mb-2"  multiple data-live-search="true" data-actions-box="true"
                                                          data-selected-text-format="count > 1" title="Select assignee">
                                                          <option data-hidden="true"></option>
                                                          <option value="Thomas">Thomas B.</option>
                                                          <option value="Nocoleta">Nocoleta B.</option>
                                                          <option value="Paolo">Paolo P.</option>
                                                          <option value="Derick">Derick R.</option>
                                                          <option value="Yves">Yves C.</option>
                                                        </select>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td>
                                                  <table class="table mb-0">
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="invisible">Edit Rate</label>
                                                        <div class="input-group mb-2 edit-rate">
                                                          <input class="form-control" type="text" placeholder="7,75" value="" aria-invalid="false" aria-required="true">
                                                          <span class="input-group-addon" >&#8364;</span>
                                                        </div>
                                                        <p class="show-rate text-main mb-2 df-ac-jc">0 &#8364;</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="invisible">Editor</label>
                                                        <div class="input-group mb-2 edit-rate">
                                                          <input class="form-control" type="text" placeholder="5,75" value="" aria-invalid="false" aria-required="true">
                                                          <span class="input-group-addon" >&#8364;</span>
                                                        </div>
                                                        <p class="show-rate text-main mb-2 df-ac-jc">0 &#8364;</p>
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="borderless p-0">
                                                        <label for="" class="invisible">Lead Editor</label>
                                                        <div class="input-group mb-2 edit-rate">
                                                          <input class="form-control" type="text" placeholder="1,50" value="" aria-invalid="false" aria-required="true">
                                                          <span class="input-group-addon" >&#8364;</span>
                                                        </div>
                                                        <p class="show-rate text-main mb-2 df-ac-jc">0 &#8364;</p>
                                                      </td>
                                                    </tr>
                                                  </table>
                                                </td>
                                                <td>
                                                  <p class="text-main mb-0 text-center fw600">0 &#8364;</p>
                                                </td>
                                                <td class="action">
                                                  <a href="javascript:;" class="delete-card df-ac-jc">
                                                    <i class="material-icons" data-toggle="tooltip" title="Delete Card">delete</i>
                                                  </a>
                                                </td>
                                              </tr>
                                              <!-- <tr class="new-band-rate" style="display: none;">
                                                <td>
                                                  <input
                                                  class="form-control input-card-name py-5"
                                                  type="text"
                                                  value=""
                                                  aria-invalid="false"
                                                  aria-required="true">
                                                </td>
                                                <td>
                                                  <input class="form-control input-band-rate" type="text" placeholder="Rate name" value="" aria-invalid="false" aria-required="true">
                                                </td>
                                                <td>
                                                  <p>Writer</p>
                                                  <p>Editor</p>
                                                  <p>Lead editor</p>
                                                </td>
                                                <td>
                                                  <div class="input-group mb-10">
                                                    <input class="form-control" type="text" placeholder="7,75" value="">
                                                    <span class="input-group-addon" >&#8364;</span>
                                                  </div>
                                                  <div class="input-group mb-10">
                                                    <input class="form-control" type="text" placeholder="5,75" value="">
                                                    <span class="input-group-addon" >&#8364;</span>
                                                  </div>
                                                  <div class="input-group mb-10">
                                                    <input class="form-control" type="text" placeholder="1,50" value="">
                                                    <span class="input-group-addon" >&#8364;</span>
                                                  </div>
                                                </td>
                                                <td>
                                                  <p>0  &#8364;</p>
                                                  <p>0  &#8364;</p>
                                                  <p>0  &#8364;</p>
                                                </td>
                                                <td>
                                                  <p>0  &#8364;</p>
                                                  <p>0  &#8364;</p>
                                                  <p>0  &#8364;</p>
                                                </td>
                                                <td class="action">
                                                  <a href="javascript:;" class="delete-band-rate">Delete</a>
                                                </td>
                                              </tr> -->
                                              <tr>
                                                <td colspan="7" align="left">
                                                  <a href="javascript:;" class="add-a-card td-u text-selected">+ Add a card</a>
                                                  <!-- <a href="javascript:;" class="undo-delete-card ml-3 td-u text-delete" style="display: none;">Undo Delete card</a> -->
                                                </td>
                                              </tr>
                                              <!-- <tr>
                                                <td class="borderless"><b>Total</b></td>
                                                <td class="borderless"></td>
                                                <td class="borderless"><b>0.158 &#8364;</b></td>
                                                <td class="borderless"><b>26 &#8364;</b></td>
                                                <td class="borderless"><b>260 &#8364;</b></td>
                                                <td class="borderless"></td>
                                              </tr> -->
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 tab-navigation">
                          <div class="row">
                            <div class="col-md-6">
                              <button type="button" class="btn btn-info btn-fill full-width btn-wd btn-no btn-back pull-left">Back</button>
                            </div>
                            <div class="col-md-6">
                              <button type="button" class="btn btn-info btn-fill full-width btn-wd btn-yes pull-right btn-finish" onclick="onFinishWizard()">Create</button>
                              <button type="button" class="btn btn-info btn-fill full-width btn-wd btn-yes pull-right disabled">Processing</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </template>
      <script type="text/javascript">

      </script>
      <style>

      </style>
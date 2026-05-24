<template>
  <div class="component-hero">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <div class="content">
      <div v-html="content"></div>
    </div>
    <div class="meta">
      <small>Generated: {{ generatedDate }}</small>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  title: String,
  description: String
});

// Export config data
const componentConfig = {"title":"Daily Info","description":"","content":"<ul><li><span style=\"font-weight: bold; font-size:larger;\">Santa Info &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://docs.google.com/spreadsheets/d/1JepTNJDbeBJk_x2ddVQB-vMvoNRs318PBkmCDFXouxE\" target=\"SantasCalendar\">Santa\"s Calendar</a>; <a href=\"https://docs.google.com/spreadsheets/d/1Ak8bPCN406b2wIbChpQ1oxcAfvBaeAeLt32nx1V_0UQ\" target=\"SantasCalendar1\">Santa\"s Calendar 2025</a></li><li><span style=\"font-weight: bold; font-size:larger;\">Greenfield Info &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://www.greenfieldlancaster.com/event-calendar/\" target=\"GreenfieldCalendar\">Greenfield Event Calendar</a></li><li><span style=\"font-weight: bold; font-size:larger;\">Expenses Info &nbsp;&#10132;&nbsp;&nbsp;</span>Expenses YTD - \"Z:\\\\User Documents\\\\Family\\\\Financial_Info\\\\This Year - WIP\\\\This_Year_WIP.xlsm\"</li><li><a href=\"https://gcio.com\" target=\"GCIO\" style=\"font-weight: bold; font-size:larger;\">GCIO</a><span style=\"font-weight: bold; font-size:larger;\"> &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://govcio.okta.com/\" target=\"gcio\">GCIO Daily Timesheet</a></li><li><a href=\"https://dbitpro.com\" target=\"dbITpro\" style=\"font-weight: bold; font-size:larger;\">dbITpro</a><span style=\"font-weight: bold; font-size:larger;\"> &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://imap.dbitpro.com/\" target=\"_blank\" title=\"$cr3wTh1$\">DBIT Email</a><a href=\"https://workforce.intuit.com/app/payroll-employee-portal-ui/ius/sign-in\" target=\"_blank\" title=\"(mike.barlow@dbitpro.com)\">DBIT Payroll</a></li><li><a href=\"https://ghms.conestogavalley.org\" target=\"Gerald G. Huesken Middle School\" style=\"font-weight: bold; font-size:larger;\">Gerald G. Huesken Middle School</a><span style=\"font-weight: bold; font-size:larger;\"> &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://www.conestogavalley.org/Page/1697\" target=\"GHMSCalendar\">Calendar</a><!-- Uses mailto chrome plugin - http://www.scottseverance.us/mailto.html --><a href=\"https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=GHMS_Attendance@conestogavalley.org&su=Gideon Barlow (6th grade) was absent from school on...\" target=\"SchoolAbsent\">Absent from School</a> <a href=\"https://mail.google.com/mail/u/0/?tf=cm&to=riley_freeman@conestogavalley.org&cc&bcc&su=Re: Gideon%20Barlow&body&fs=1\"target=\"GHMS\">Riley Freeman</a> <a href=\"https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=transportation@conestogavalley.org; Melissa_reed@conestogavalley.org&su=Gideon Barlow (2294 William Penn Way to GHMS) will not need...\" target=\"email\">Bus Transportation</a></li><li><a href=\"https://cvhs.conestogavalley.org/\" target=\"HighSchool\" style=\"font-weight: bold; font-size:larger;\">High School</a><span style=\"font-weight: bold; font-size:larger;\"> &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://www.conestogavalley.org/Page/1533\" target=\"HighSchoolCalendar\">Calendar</a> <a href=\"https://mail.google.com/mail/u/0/?tf=cm&to=HS_Attendance@conestogavalley.org&cc&bcc&su=Richard Barlow was absent from school on...&body&fs=1\" target=\"SchoolAbsent\">Absent from School</a> <a href=\"https://mail.google.com/mail/u/0/?tf=cm&to=Douglas_Helsel@conestogavalley.org&cc&bcc&su=Re: Richard Barlow&body&fs=1\" target=\"SchoolAbsent\">Richie Guidance Counselor</a> </li></ul>","bgColor1":"#667eea","bgColor2":"#764ba2"};

const content = ref("<ul><li><span style=\"font-weight: bold; font-size:larger;\">Santa Info &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://docs.google.com/spreadsheets/d/1JepTNJDbeBJk_x2ddVQB-vMvoNRs318PBkmCDFXouxE\" target=\"SantasCalendar\">Santa\"s Calendar</a>; <a href=\"https://docs.google.com/spreadsheets/d/1Ak8bPCN406b2wIbChpQ1oxcAfvBaeAeLt32nx1V_0UQ\" target=\"SantasCalendar1\">Santa\"s Calendar 2025</a></li><li><span style=\"font-weight: bold; font-size:larger;\">Greenfield Info &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://www.greenfieldlancaster.com/event-calendar/\" target=\"GreenfieldCalendar\">Greenfield Event Calendar</a></li><li><span style=\"font-weight: bold; font-size:larger;\">Expenses Info &nbsp;&#10132;&nbsp;&nbsp;</span>Expenses YTD - \"Z:\\\\User Documents\\\\Family\\\\Financial_Info\\\\This Year - WIP\\\\This_Year_WIP.xlsm\"</li><li><a href=\"https://gcio.com\" target=\"GCIO\" style=\"font-weight: bold; font-size:larger;\">GCIO</a><span style=\"font-weight: bold; font-size:larger;\"> &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://govcio.okta.com/\" target=\"gcio\">GCIO Daily Timesheet</a></li><li><a href=\"https://dbitpro.com\" target=\"dbITpro\" style=\"font-weight: bold; font-size:larger;\">dbITpro</a><span style=\"font-weight: bold; font-size:larger;\"> &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://imap.dbitpro.com/\" target=\"_blank\" title=\"$cr3wTh1$\">DBIT Email</a><a href=\"https://workforce.intuit.com/app/payroll-employee-portal-ui/ius/sign-in\" target=\"_blank\" title=\"(mike.barlow@dbitpro.com)\">DBIT Payroll</a></li><li><a href=\"https://ghms.conestogavalley.org\" target=\"Gerald G. Huesken Middle School\" style=\"font-weight: bold; font-size:larger;\">Gerald G. Huesken Middle School</a><span style=\"font-weight: bold; font-size:larger;\"> &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://www.conestogavalley.org/Page/1697\" target=\"GHMSCalendar\">Calendar</a><!-- Uses mailto chrome plugin - http://www.scottseverance.us/mailto.html --><a href=\"https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=GHMS_Attendance@conestogavalley.org&su=Gideon Barlow (6th grade) was absent from school on...\" target=\"SchoolAbsent\">Absent from School</a> <a href=\"https://mail.google.com/mail/u/0/?tf=cm&to=riley_freeman@conestogavalley.org&cc&bcc&su=Re: Gideon%20Barlow&body&fs=1\"target=\"GHMS\">Riley Freeman</a> <a href=\"https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=transportation@conestogavalley.org; Melissa_reed@conestogavalley.org&su=Gideon Barlow (2294 William Penn Way to GHMS) will not need...\" target=\"email\">Bus Transportation</a></li><li><a href=\"https://cvhs.conestogavalley.org/\" target=\"HighSchool\" style=\"font-weight: bold; font-size:larger;\">High School</a><span style=\"font-weight: bold; font-size:larger;\"> &nbsp;&#10132;&nbsp;&nbsp;</span><a href=\"https://www.conestogavalley.org/Page/1533\" target=\"HighSchoolCalendar\">Calendar</a> <a href=\"https://mail.google.com/mail/u/0/?tf=cm&to=HS_Attendance@conestogavalley.org&cc&bcc&su=Richard Barlow was absent from school on...&body&fs=1\" target=\"SchoolAbsent\">Absent from School</a> <a href=\"https://mail.google.com/mail/u/0/?tf=cm&to=Douglas_Helsel@conestogavalley.org&cc&bcc&su=Re: Richard Barlow&body&fs=1\" target=\"SchoolAbsent\">Richie Guidance Counselor</a> </li></ul>");
const generatedDate = ref(new Date().toISOString());
const title = ref("Daily Info");
const description = ref("Component generated from config");
</script>

<style scoped>
.component-hero {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

h2 {
  margin-top: 0;
  font-size: 1.5rem;
}

.meta {
  margin-top: 1rem;
  opacity: 0.8;
}
</style>

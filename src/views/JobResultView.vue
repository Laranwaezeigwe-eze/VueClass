<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filter-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFilterSidebar from "@/components/JobResults/JobFilterSideBar/JobFilterSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

export default {
  name: "JobResultView",
  components: { JobFilterSidebar, JobListings },
};
</script>

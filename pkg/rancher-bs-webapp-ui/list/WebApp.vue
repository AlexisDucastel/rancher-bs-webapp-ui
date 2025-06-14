<template>
  <ListLayout :schema="schema" :rows="rows" :headers="headers" />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useList } from '@shell/core/list';
import { WEBAPP } from '../models/WebApp';

export default defineComponent({
  name: 'WebAppList',
  setup() {
    const { rows } = useList({
      group: WEBAPP.group,
      version: WEBAPP.version,
      kind: WEBAPP.kind,
    });

    const headers = computed(() => [
      { name: 'metadata.name', label: 'Name' },
      { name: 'spec.hostname', label: 'Hostname' },
      { name: 'spec.image', label: 'Image' },
      { name: 'spec.port', label: 'Port' },
      { name: 'spec.replicas', label: 'Replicas' },
      { name: 'status.availableReplicas', label: 'Available Replicas' },
    ]);

    const schema = computed(() => WEBAPP);

    return { rows, headers, schema };
  },
});
</script> 
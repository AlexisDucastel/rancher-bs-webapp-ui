<template>
  <ResourceEditLayout :resource="resource" @save="save">
    <template #default>
      <form @submit.prevent="save">
        <div>
          <label>Name</label>
          <input v-model="resource.spec.name" required />
        </div>
        <div>
          <label>Hostname</label>
          <input v-model="resource.spec.hostname" required />
        </div>
        <div>
          <label>Image</label>
          <input v-model="resource.spec.image" placeholder="nginx:alpine" />
        </div>
        <div>
          <label>Port</label>
          <input type="number" v-model.number="resource.spec.port" placeholder="80" />
        </div>
        <div>
          <label>Replicas</label>
          <input type="number" v-model.number="resource.spec.replicas" placeholder="1" />
        </div>
        <button type="submit">Save</button>
      </form>
    </template>
  </ResourceEditLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useResourceEdit } from '@shell/core/edit';
import { WEBAPP } from '../models/WebApp';

export default defineComponent({
  name: 'WebAppEdit',
  setup() {
    const { resource, save } = useResourceEdit({
      group: WEBAPP.group,
      version: WEBAPP.version,
      kind: WEBAPP.kind,
      defaults: {
        'spec.image': 'nginx:alpine',
        'spec.port': 80,
        'spec.replicas': 1,
      },
    });
    return { resource, save };
  },
});
</script> 
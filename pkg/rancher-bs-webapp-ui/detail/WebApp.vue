<template>
  <ResourceDetailLayout :resource="resource">
    <template #default>
      <div>
        <h3>Spec</h3>
        <ul>
          <li><b>Name:</b> {{ resource.spec.name }}</li>
          <li><b>Hostname:</b> {{ resource.spec.hostname }}</li>
          <li><b>Image:</b> {{ resource.spec.image }}</li>
          <li><b>Port:</b> {{ resource.spec.port }}</li>
          <li><b>Replicas:</b> {{ resource.spec.replicas }}</li>
        </ul>
        <h3>Status</h3>
        <ul>
          <li><b>Available Replicas:</b> {{ resource.status?.availableReplicas }}</li>
          <li><b>Deployment Conditions:</b>
            <ul>
              <li v-for="cond in resource.status?.deploymentConditions || []" :key="cond.type">
                {{ cond.type }}: {{ cond.status }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </template>
  </ResourceDetailLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useResourceDetail } from '@shell/core/detail';
import { WEBAPP } from '../models/WebApp';

export default defineComponent({
  name: 'WebAppDetail',
  setup() {
    const { resource } = useResourceDetail({
      group: WEBAPP.group,
      version: WEBAPP.version,
      kind: WEBAPP.kind,
    });
    return { resource };
  },
});
</script> 
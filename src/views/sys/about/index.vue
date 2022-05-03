<template>
  <PageWrapper title="About">
    <template #headerContent>
      <div class="flex justify-between items-center">
        <span class="flex-1">
          <a :href="GITHUB_URL" target="_blank">{{ name }}</a>
          It is a background solution based on Vue3.0, Vite, Ant-Design-Vue and TypeScript. The goal
          is to develop for medium and large projects, providing ready-made out-of-the-box solutions
          and rich examples. In principle, it will not restrict any code to be used for Commercial.
        </span>
      </div>
    </template>
    <Description @register="infoRegister" class="enter-y" />
    <Description @register="register" class="my-4 enter-y" />
    <Description @register="registerDev" class="enter-y" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { h } from 'vue';
  import { Tag } from 'ant-design-vue';
  import { PageWrapper } from '/@/components/Page';
  import { Description, DescItem, useDescription } from '/@/components/Description/index';
  import { GITHUB_URL, SITE_URL, DOC_URL } from '/@/settings/siteSetting';

  const { pkg, lastBuildTime } = __APP_INFO__;

  const { dependencies, devDependencies, name, version } = pkg;

  const schema: DescItem[] = [];
  const devSchema: DescItem[] = [];

  const commonTagRender = (color: string) => (curVal) => h(Tag, { color }, () => curVal);
  const commonLinkRender = (text: string) => (href) => h('a', { href, target: '_blank' }, text);

  const infoSchema: DescItem[] = [
    {
      label: 'Version',
      field: 'version',
      render: commonTagRender('blue'),
    },
    {
      label: 'Last Build Time',
      field: 'lastBuildTime',
      render: commonTagRender('blue'),
    },
    {
      label: 'Document',
      field: 'doc',
      render: commonLinkRender('Document'),
    },
    {
      label: 'Preview',
      field: 'preview',
      render: commonLinkRender('Preview address'),
    },
    {
      label: 'Github',
      field: 'github',
      render: commonLinkRender('Github'),
    },
  ];

  const infoData = {
    version,
    lastBuildTime,
    doc: DOC_URL,
    preview: SITE_URL,
    github: GITHUB_URL,
  };

  Object.keys(dependencies).forEach((key) => {
    schema.push({ field: key, label: key });
  });

  Object.keys(devDependencies).forEach((key) => {
    devSchema.push({ field: key, label: key });
  });

  const [register] = useDescription({
    title: 'Dependencies',
    data: dependencies,
    schema: schema,
    column: 3,
  });

  const [registerDev] = useDescription({
    title: 'Dev Dependencies',
    data: devDependencies,
    schema: devSchema,
    column: 3,
  });

  const [infoRegister] = useDescription({
    title: 'Project information',
    data: infoData,
    schema: infoSchema,
    column: 2,
  });
</script>

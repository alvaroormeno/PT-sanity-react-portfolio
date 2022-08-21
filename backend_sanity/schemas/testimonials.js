export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'company',
      title: 'Compnay',
      type: 'string'
    },
    {
      name: 'imageurl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        // So user can crop the picture before uploading
        hotspot: true,
      }
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string'
    },
  ]
}
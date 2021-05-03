import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'

const items = [
  {
    src: 'https://opoznaybulgaria.com/wp-content/uploads/2016/02/%D0%9A%D0%BE%D0%BF%D1%80%D0%B8%D0%B2%D1%89%D0%B8%D1%86%D0%B0-1.jpg',
    header: 'ГРАДЪТ',
    key: '1'
  },
  {
    src: 'https://globalcastaway.com/wp-content/uploads/2018/08/benkovski-house-koprivshtitsa.jpg',
    header: 'ПАМЕТНИЦИТЕ',
    key: '2'
  },
  {
    src: 'https://img.itinari.com/page/content/original/8fd5da22-b73f-486a-9bd6-759cae0427a5-istock-1077525660.jpg?ch=DPR&dpr=1.25&w=994&s=be95e1924f3edc4a90f08e8826b3f333',
    header: 'АРХИТЕКТУРАТА',
    key: '3'
  },
  {
    src: 'https://img.itinari.com/page/content/original/aaeb96ae-ab9b-4ccf-8e93-7aa18e3ba1ea-istock-485200686.jpg?ch=DPR&dpr=1.25&w=994&s=d78093ac908880d3cb8afe028df3824e',
    header: 'ТРАДИЦИИТЕ',
    key: '4'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example
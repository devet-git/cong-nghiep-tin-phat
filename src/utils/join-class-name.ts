export default function joinClassNames(...classes:any[]){
  return classes.filter(Boolean).join(" ");
}
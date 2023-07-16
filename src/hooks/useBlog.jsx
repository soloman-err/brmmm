import { useQuery } from '@tanstack/react-query';

const useBlogs = () => {
  const { data: blogs = [] } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await fetch('https://brmmm-server.vercel.app/blogs');
      return res.json();
    },
  });
  return [blogs];
};

export default useBlogs;

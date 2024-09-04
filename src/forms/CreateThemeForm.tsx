'use client';

import { Form } from '@/components/ui/form';
import { z } from 'zod';

const CreateThemeFormSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().min(3).max(100),
});

const CreateThemeForm = () => {
  return <Form></Form>;
};

export default CreateThemeForm;

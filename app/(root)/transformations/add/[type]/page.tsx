import Header from '@/components/shared/Header';
import { transformationTypes } from '@/constants';
import { SearchParamProps } from '@/types';

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
    const transformation = transformationTypes[type];

    return <Header title={transformation.title} subtitle={transformation.subtitle} />;
};
export default AddTransformationTypePage;

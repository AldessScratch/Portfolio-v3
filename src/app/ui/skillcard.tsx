import { IconCode } from '@tabler/icons-react';
import  Badge from './badge';

export default function SkillCard() {
    return(
        <div className="w-full h-auto my-4 rounded-2xl blbg" id='skill'>
            <div className="pt-8 px-10">
                <div className="flex justify-left items-center ">
                    <IconCode />
                    <h2 className="card-title text-shadow-xl text-3xl pl-2">Skills</h2>
                </div>
                <p className='font-light text-gray-600 dark:text-gray-400 my-2'>Tools and technologies I work with</p>
            </div>
            <div className="card-body items-center text-center">
                <div className="flex flex-wrap justify-center">
                    <Badge badge="html" />
                    <Badge badge="css" />
                    <Badge badge="js" />
                    <Badge badge="react" />
                    <Badge badge="next" />
                    <Badge badge="tailwind" />
                    <Badge badge="blender" />
                    <Badge badge="git" />
                    <Badge badge="github" />
                    <Badge badge="vercel" />
                    <Badge badge="vscode" />
                    <Badge badge="figma" />
                </div>
            </div>
        </div>
    )
}
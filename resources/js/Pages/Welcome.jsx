import { Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import { IconContext } from 'react-icons';
import { FaLaravel, FaReact, FaChess, FaLinkedin, FaGithubAlt, FaFacebook, FaEnvelope } from "react-icons/fa";
import { AiTwotoneApi } from "react-icons/ai";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Welcome() {
    return (
        <GuestLayout>
                    <Head title="Welcome" />
                        <div className="text-2xl font-semibold mx-auto text-purple-300 text-center">
                            Hi!
                        </div>
                        <div className="px-2 py-2 grid grid-cols-1 sm:grid-cols-3 mt-16 sm:gap-10">
                            <div className="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white dark:bg-gray-700 dark:bg-ternary-dark">
                                <div className="text-center px-4 py-6">
                                    <p className="text-2xl text-red-500 font-semibold mb-2">Who am I?</p>
                                    <span className="text-lg">Frank, duh!</span>
                                    <div className="inline-flex">
                                        <span className="mx-2"><img src="/frank.jpg" /></span>
                                        <p className="my-3">That's me, on the left and well, as you might have guessed, my name is Frank Lambregts. I am an enthousiast about anything that has to do with tech. I like to play chess and I am huge fan of Harry Potter.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white dark:bg-gray-700 dark:bg-ternary-dark">
                                <div className="text-center px-4 py-6">
                                    <p className="text-2xl text-red-500 font-semibold mb-2">My likes?</p>
                                    <span className="text-lg">Many things!</span>
                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    <IconContext.Provider value={{ color:'red', size: '51', style: { verticalAlign: 'middle' } }}>
                                        <div className="block mx-auto">
                                            <a href="https://laravel.com" target="_blank">
                                            <FaLaravel />
                                            </a>
                                            <span className="">Laravel</span>
                                        </div>
                                        </IconContext.Provider>
                                        <IconContext.Provider value={{ size: '51', style: { verticalAlign: 'middle' } }}>

                                        <div className="block mx-auto">
                                            <a href="https://statamic.com" target="_blank">
                                            <img className="inline-flex" src="icons/statamic-mark-lime.svg"/>
                                            </a>
                                            <span className="">Statamic</span>
                                        </div>
                                        </IconContext.Provider>
                                        <IconContext.Provider value={{ color:'lightblue', size: '51', style: { verticalAlign: 'middle' } }}>
                                            <div className="block mx-auto">
                                             <a href="https://react.dev" target="_blank"><FaReact />
                                            </a>
                                            <span className="">React</span>
                                            </div>
                                        </IconContext.Provider>
                                        <IconContext.Provider value={{ color:'lightblue', size: '51', style: { verticalAlign: 'middle' } }}>
                                            <div className="block mx-auto">
                                             <AiTwotoneApi />

                                            <span className="">APIs</span>
                                            </div>
                                        </IconContext.Provider>
                                        <IconContext.Provider value={{ color:'skyblue', size: '51', style: { verticalAlign: 'middle' } }}>
                                            <div className="block mx-auto">
                                             <a href="https://tailwindcss.com" target="_blank"><RiTailwindCssFill />
                                            </a>
                                            <span className="">Tailwind</span>
                                            </div>
                                        </IconContext.Provider>
                                        <IconContext.Provider value={{ color:'gold', size: '51', style: { verticalAlign: 'middle' } }}>
                                            <div className="block mx-auto">
                                             <FaChess />

                                            <span className="">Chess</span>
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-3xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-white dark:bg-gray-700 dark:bg-ternary-dark">
                                <div className="text-center px-4 py-6">
                                    <p className="text-2xl text-red-500 font-semibold mb-2">My Socials?</p>
                                    <span className="text-lg">Uh, oh</span>
                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                    <IconContext.Provider value={{ color:'blue', size: '51', style: { verticalAlign: 'middle' } }}>
                                        <div className="block mx-auto">
                                            <a className='' href="https://www.facebook.com/franklambregts" target="_blank">
                                            <FaFacebook />
                                            </a>
                                            <span className="">FaceBook</span>
                                        </div>
                                        </IconContext.Provider>
                                        <IconContext.Provider value={{ color:'blue', size: '51', style: { verticalAlign: 'middle' } }}>
                                            <div className="block mx-auto">
                                             <a href="https://www.linkedin.com/in/frank-lambregts-a72017149/" target="_blank"><FaLinkedin />
                                            </a>
                                            <span className="">LinkedIn</span>
                                            </div>
                                        </IconContext.Provider>
                                        <IconContext.Provider value={{ color:'black', size: '51', style: { verticalAlign: 'middle' } }}>
                                            <div className="block mx-auto">
                                            <a href="https://github.com/Frank-L93/" target="_blank"><FaGithubAlt /></a>

                                            <span>GitHub</span>

                                            </div>
                                        </IconContext.Provider>
                                        <IconContext.Provider value={{ color:'blue', size: '51', style: { verticalAlign: 'middle' } }}>
                                            <div className="block mx-auto">
                                             <div className="mx-4 px-2"><FaEnvelope /></div>

                                            <span>web@</span>
                                            <p>franklambregts</p>
                                            <p>.com</p>
                                            </div>
                                        </IconContext.Provider>
                                    </div>
                                </div>
                            </div>
                        </div>
              </GuestLayout>
    );
}

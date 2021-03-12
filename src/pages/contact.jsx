import * as React from 'react'
import { Layout, SEO } from '../components'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
  <div className="relative max-w-xl mx-auto">
    <svg className="absolute transform translate-x-1/2 left-full" width={404} height={404} fill="none" viewBox="0 0 404 404" aria-hidden="true">
      <defs>
        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
    </svg>
    <svg className="absolute bottom-0 transform -translate-x-1/2 right-full" width={404} height={404} fill="none" viewBox="0 0 404 404" aria-hidden="true">
      <defs>
        <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
          <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
        </pattern>
      </defs>
      <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
    </svg>
    <div className="text-center">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Contact sales
      </h2>
      <p className="mt-4 text-lg leading-6 text-gray-500">
        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
      </p>
    </div>
    <div className="mt-12">
      <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
          <div className="mt-1">
            <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <div>
          <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
          <div className="mt-1">
            <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <div className="mt-1">
            <input type="text" name="company" id="company" autoComplete="organization" className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1">
            <input id="email" name="email" type="email" autoComplete="email" className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">Country</label>
              <select id="country" name="country" className="h-full py-0 pl-4 pr-8 text-gray-500 bg-transparent border-transparent rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
            </div>
            <input type="text" name="phone_number" id="phone_number" autoComplete="tel" className="block w-full px-4 py-3 pl-20 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="+1 (555) 987-6543" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <div className="mt-1">
            <textarea id="message" name="message" rows={4} className="block w-full px-4 py-3 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" defaultValue={""} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {/* Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" */}
              <button type="button" className="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out bg-gray-200 border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-pressed="false">
                <span className="sr-only">Agree to policies</span>
                {/* Enabled: "translate-x-5", Not Enabled: "translate-x-0" */}
                <span aria-hidden="true" className="inline-block w-5 h-5 transition duration-200 ease-in-out transform translate-x-0 bg-white rounded-full shadow ring-0" />
              </button>
            </div>
            <div className="ml-3">
              <p className="text-base text-gray-500">
                By selecting this, you agree to the
                <a href="#" className="font-medium text-gray-700 underline">Privacy Policy</a>
                and
                <a href="#" className="font-medium text-gray-700 underline">Cookie Policy</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-2">
          <button type="submit" className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Let's talk
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  </Layout>
)

export default ContactPage

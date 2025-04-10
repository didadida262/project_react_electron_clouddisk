import { useState } from 'react'
import api from '../api/index'
import { IPCInfo } from '../utils/index'
import { Button, Input } from 'antd'
import { useResources } from '../provider/resource-context'
interface IProps {}

export default function SelectDir(props: IProps) {
  const { currentpath, setCurrentpath, setCategories } = useResources()

  const handleSelectDirectory = () => {
    const params = {
      type: 'selectPath',
      data: '',
    }
    api.sendMessage(params as unknown as IPCInfo)
    api.on('selectPath_back', (data: any) => {
      console.log('反馈结果>>>>', data)
      setCategories(data.files)
      setCurrentpath(data.folderPath)
    })
  }

  const scanDirectory = (dir: string) => {}
  return (
    <div className="">
      <Button onClick={handleSelectDirectory} type="primary">
        打开路径
      </Button>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: '假期拒绝人挤人！适合带娃去的④个小众旅行地?',
    message: '假期拒绝人挤人！适合带娃去的④个小众旅行地?'
  },
  {
    heading: '无主灯装修设计就是坑，千万不要装?',
    message: '无主灯装修设计就是坑，千万不要装?'
  },
  {
    heading: '怎样把男式内裤的文案写出高级感?',
    message: '怎样把男式内裤的文案写出高级感?'
  },
  {
    heading: '花西子 vs 雅思兰黛',
    message: '花西子 vs 雅思兰黛'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
